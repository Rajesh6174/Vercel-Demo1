# Random Fact Generator

A tiny static website (plain HTML/CSS/JS, no build step) that shows a random fact each time you click the button.

## Files

- `index.html` — page markup
- `style.css` — styling
- `script.js` — the array of facts and the click handler
- `vercel.json` — Vercel config (clean URLs)

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to Vercel

**Option A — Vercel dashboard (no CLI):**

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to https://vercel.com and sign in (GitHub login works).
3. Click **Add New... → Project**.
4. Import this GitHub repository.
5. Framework preset: choose **Other** (it's a static site, no build command needed).
6. Leave Build Command and Output Directory blank/default — Vercel will serve the static files as-is.
7. Click **Deploy**. Vercel gives you a live URL (e.g. `your-project.vercel.app`) within seconds.

**Option B — Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

Follow the CLI prompts to link/create the project; it auto-detects the static site and deploys it.
