# Strobergconsulting

## Project info

Just transfering files

## Local development

1. Install dependencies: `npm install`
2. Build once (Wrangler serves `dist`): `npm run build`
3. Copy `.dev.vars.example` to `.dev.vars` and fill in:
   - `MAILERLITE_API_TOKEN` – token from MailerLite dashboard
   - `MAILERLITE_GROUP_ID` – optional, keeps submissions grouped
   - `CONTACT_WEBHOOK_URL` – optional extra notification endpoint
4. Start the Worker with local secrets: `npx wrangler dev`

Wrangler automatically loads `.dev.vars`, so the contact form posts to `/api/contact` locally with the same configuration used in production.
