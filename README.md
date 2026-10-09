# Nonso Chukwuemeka — Frontend Developer Portfolio

A responsive, SEO-ready portfolio site built in React (Vite) with a dark / deep-red
gradient theme, a floating WhatsApp button, and an embedded Google Map on the contact page.

## Stack

- React 18 + Vite
- React Router (multi-page routing)
- react-helmet-async (per-page SEO tags)
- Plain CSS with custom properties (no framework)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
public/
  assets/images/       # logo, hero, portfolio, favicon — drop real images in here
  robots.txt
  sitemap.xml
src/
  components/          # Header, Footer, Hero, Services, Portfolio, Testimonials,
                        # FAQ, Contact, WhatsAppButton, Process, SEO
  pages/                Home, About, Projects, Contact, NotFound
  data/                 services.js, projects.js, testimonials.js, faqs.js
  config.js             one place for contact info, WhatsApp number, map embed, socials
  App.jsx, main.jsx, styles.css
```

## Before you deploy — things to personalize

1. **`src/config.js`** — replace the WhatsApp number, email, phone, social links, and
   `mapEmbedSrc` (get your own embed URL from Google Maps → Share → Embed a map, no API
   key required).
2. **`src/data/projects.js`** — update the `live` and `code` links once projects are
   deployed publicly; add real screenshots to `public/assets/images/portfolio/`.
3. **`src/data/testimonials.js`** — replace the sample quotes with real client feedback.
4. **Images** — `public/assets/images/hero`, `/logo`, `/portfolio` each have a short
   README describing what to add. The site works without them (missing images are
   hidden gracefully) but looks best with real photos/screenshots.
5. **`index.html`** — update `og:image`, the canonical domain (currently
   `nonsodev.com` as a placeholder), and add a Google Search Console verification
   tag once you have a live domain.
6. **`public/sitemap.xml`** — update the domain to match your real one.

## SEO features included

- Per-page `<title>` and meta description via the `SEO` component
- Open Graph + Twitter card tags
- `robots.txt` and `sitemap.xml`
- Semantic HTML (`<header>`, `<main>`, `<footer>`, one `<h1>` per page)
- Descriptive `alt` text on project images

## Marketing / conversion features

- Floating WhatsApp button (bottom-right, all pages) with a pre-filled message
- Embedded Google Map on the Contact page
- Clear, repeated calls to action ("Start a project", "Talk about a project")
- Contact form with validation that opens a pre-filled email (no backend required)

## Deployment

Any static host works — build with `npm run build` and deploy the `dist/` folder to
Netlify, Vercel, GitHub Pages, or similar. If deploying to a subpath or GitHub Pages,
add a `base` option to `vite.config.js`.
