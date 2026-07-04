# ReVisual Digital — revisualdigital.com

Next.js 14 + Tailwind CSS. Six pages: Home, Services, Websites, AI Systems, Automation, Contact — with a working lead form.

## Run it locally

```bash
cd revisual-site
npm install
npm run dev
```

Open http://localhost:3000

## Before launch — 3 things to edit

Everything lives in **`lib/config.js`**:

1. **City/region** — replace `"Your City"` and `"Your Region"`. This updates the hero, SEO titles, footer, and copy site-wide.
2. **Email** — confirm `contact@revisualdigital.com` (or whatever inbox you'll use).
3. **Calendly** — paste your Calendly/Cal.com link into `calendlyUrl` and a booking embed appears on the contact page automatically.

## Lead emails (the form)

The form posts to `/api/contact`. To receive leads by email:

1. Create a free account at [resend.com](https://resend.com) (3,000 emails/month free)
2. Create an API key
3. Add a file called `.env.local` in the project root:

   ```
   RESEND_API_KEY=re_xxxxxxxxx
   ```

4. Once you verify revisualdigital.com in Resend, change the `from:` address in `app/api/contact/route.js` to `leads@revisualdigital.com`.

Without a key, submissions log to the terminal (dev-safe, nothing breaks).

The form includes a honeypot field, so bot spam is filtered automatically.

## Deploy (recommended: Vercel — free)

1. Push this folder to a GitHub repo
2. Import it at [vercel.com](https://vercel.com) — it auto-detects Next.js
3. Add `RESEND_API_KEY` under Project → Settings → Environment Variables
4. Point revisualdigital.com at Vercel (they walk you through the DNS records)

## Structure

```
lib/config.js        ← site-wide settings (edit this first)
app/page.jsx         ← homepage
app/services/        ← services hub
app/websites/        ← website builds
app/ai-systems/      ← AI integration
app/automation/      ← automation
app/contact/         ← contact + lead form
app/api/contact/     ← form → email endpoint
components/          ← Nav, Footer, ContactForm, Reveal (animations), etc.
```

## Adding a Portfolio page later

When you have client work to show, create `app/portfolio/page.jsx` (copy the pattern from any service page) and add `{ href: "/portfolio", label: "Portfolio" }` to the `nav` array in `lib/config.js`.
