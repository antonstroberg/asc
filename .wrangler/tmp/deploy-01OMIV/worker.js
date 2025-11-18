var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.ts
async function forwardToWebhook(url, payload) {
  const isSlack = url.includes("hooks.slack.com");
  if (isSlack) {
    const text = [
      `*New message from ${payload.name ?? "Unknown"}*`,
      payload.email ? `Email: ${payload.email}` : "",
      payload.company ? `Company: ${payload.company}` : "",
      payload.message ? `Message:
>${String(payload.message).replace(/\n/g, "\n>")}` : ""
    ].filter(Boolean).join("\n");
    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text })
    });
  }
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
}
__name(forwardToWebhook, "forwardToWebhook");
async function handleContact(request, env) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Expected JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  const { name, email, company = "", message } = payload ?? {};
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  const normalized = {
    name,
    email,
    company,
    message,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
    userAgent: request.headers.get("user-agent") ?? ""
  };
  if (env.MAILERLITE_API_TOKEN) {
    console.log("[contact] sending to MailerLite", {
      hasGroup: Boolean(env.MAILERLITE_GROUP_ID),
      email
    });
    const subscriberPayload = {
      email,
      fields: {
        name,
        company,
        message
      }
    };
    if (env.MAILERLITE_GROUP_ID) {
      subscriberPayload.groups = [env.MAILERLITE_GROUP_ID];
    }
    const mailerliteResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.MAILERLITE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(subscriberPayload)
    });
    console.log("[contact] MailerLite response status", mailerliteResponse.status);
    if (!mailerliteResponse.ok && mailerliteResponse.status !== 409) {
      const errorBody = await mailerliteResponse.text();
      console.error("MailerLite error:", mailerliteResponse.status, errorBody);
      return new Response(
        JSON.stringify({ error: "Unable to send message right now. Please try again later." }),
        { status: 502, headers: { "content-type": "application/json" } }
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
    headers: { "content-type": "application/json" }
  });
}
__name(handleContact, "handleContact");
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
