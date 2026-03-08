# Hosting: Vercel now, GoDaddy later

## Current (Vercel)

- Frontend and API run on the same Vercel deployment.
- Forms POST to `/api/send-contact` and `/api/send-career` (same origin).
- Set `MAIL_USER`, `MAIL_PASS`, and `MAIL_TO` in Vercel → Project → Settings → Environment Variables.

## Moving the site to GoDaddy

GoDaddy shared hosting serves **static files only** (HTML/CSS/JS). It does not run the Node.js API routes.

**Recommended:** Keep the API on Vercel and host only the frontend on GoDaddy.

1. **Keep your current Vercel project** (or a separate “API only” Vercel app) and leave the same env vars there.
2. **Build the site** with the API base URL pointing to Vercel:
   ```bash
   VITE_API_URL=https://your-vercel-app.vercel.app npm run build
   ```
   Or add `VITE_API_URL=https://your-vercel-app.vercel.app` to a `.env.production` file (do not commit real URLs if they’re secret; use GoDaddy’s build env if you build there).
3. **Upload the contents of `dist/`** to GoDaddy (e.g. via File Manager or FTP into `public_html`).
4. **Configure GoDaddy** so the domain points at that folder and single-page app routing works (usually a redirect or `.htaccess` so all routes serve `index.html`).

Then:

- **Site:** GoDaddy (your domain).
- **Forms:** Still send to `https://your-vercel-app.vercel.app/api/send-contact` and `.../api/send-career` (Vercel free tier is enough for low traffic).

No PHP or other backend is required on GoDaddy for the contact/career forms if you use this setup.

## Optional: API on GoDaddy

If you prefer everything on GoDaddy, you’d need to replace the Node APIs with a server-side solution GoDaddy supports (e.g. **PHP** scripts that send mail). The frontend would then POST to those PHP URLs instead of the Vercel API. That would require new backend scripts and changing the app to use a different `VITE_API_URL` (or separate contact/career URLs) pointing to your GoDaddy domain.
