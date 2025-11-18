type Env = {
  ASSETS: Fetcher;
  CONTACT_WEBHOOK_URL?: string;
  MAILERLITE_API_TOKEN?: string;
  MAILERLITE_GROUP_ID?: string;
};

async function forwardToWebhook(url: string, payload: Record<string, unknown>) {
  const isSlack = url.includes("hooks.slack.com");
  if (isSlack) {
    const text = [
      `*New message from ${payload.name ?? "Unknown"}*`,
      payload.email ? `Email: ${payload.email}` : "",
      payload.company ? `Company: ${payload.company}` : "",
      payload.message ? `Message:\n>${String(payload.message).replace(/\n/g, "\n>")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text }),
    });
  }

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function handleContact(request: Request, env: Env) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Expected JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const { name, email, company = "", message } = payload ?? {};
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const normalized = {
    name,
    email,
    company,
    message,
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  if (env.MAILERLITE_API_TOKEN) {
    console.log("[contact] sending to MailerLite", {
      hasGroup: Boolean(env.MAILERLITE_GROUP_ID),
      email,
    });
    const subscriberPayload: Record<string, unknown> = {
      email,
      fields: {
        name,
        company,
        message,
      },
    };
    if (env.MAILERLITE_GROUP_ID) {
      subscriberPayload.groups = [env.MAILERLITE_GROUP_ID];
    }

    const mailerliteResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.MAILERLITE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriberPayload),
    });

    console.log("[contact] MailerLite response status", mailerliteResponse.status);

    if (!mailerliteResponse.ok && mailerliteResponse.status !== 409) {
      const errorBody = await mailerliteResponse.text();
      console.error("MailerLite error:", mailerliteResponse.status, errorBody);
      return new Response(
        JSON.stringify({ error: "Unable to send message right now. Please try again later." }),
        { status: 502, headers: { "content-type": "application/json" } },
      );
    }
  }

  if (env.CONTACT_WEBHOOK_URL) {
    console.log("[contact] forwarding payload to webhook");
    await forwardToWebhook(env.CONTACT_WEBHOOK_URL, normalized);
  } else if (!env.MAILERLITE_API_TOKEN) {
    console.log("No MailerLite token or webhook configured. Payload:", normalized);
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
