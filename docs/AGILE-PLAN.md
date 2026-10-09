# Agile Plan — Nonso Chukwuemeka Frontend Portfolio Website

**Product goal:** a responsive, SEO-optimized React portfolio that communicates clarity
and credibility to a client or recruiter evaluating Nonso as a frontend developer, with
built-in conversion paths (WhatsApp, contact form, map) that turn a visit into a
conversation.

**Primary persona:** a hiring manager, startup founder, or small-business owner
scanning the site on a phone, deciding in under a minute whether to reach out.

Stories use the format: *As a `<role>`, I want `<capability>`, so that `<benefit>`.*
Points use a simple 1–8 Fibonacci-style scale. Priority: **P1** (must-have for launch),
**P2** (should-have), **P3** (nice-to-have / post-launch).

---

## Epic 1 — Project Foundation & Setup
**Goal:** a working, deployable React codebase with the right tooling before any UI work starts.

| ID | Story | AC (Acceptance Criteria) | Priority | Points |
|----|-------|---------------------------|----------|--------|
| 1.1 | As a developer, I want the project scaffolded with Vite + React, so that I have fast local builds and HMR. | `npm run dev` starts without error; `npm run build` produces a `dist/` folder. | P1 | 2 |
| 1.2 | As a developer, I want routing set up with React Router, so that the site supports multiple pages with clean URLs. | Navigating to `/`, `/about`, `/projects`, `/contact` renders the correct page; unknown routes show a 404 page. | P1 | 3 |
| 1.3 | As a developer, I want a single config file for contact details, so that I can update the WhatsApp number, email, and map without touching components. | All contact-related values are read from `src/config.js`. | P1 | 2 |
| 1.4 | As a developer, I want a consistent folder structure (components / pages / data), so that the codebase stays easy to extend. | Folder structure matches `components/`, `pages/`, `data/`, `public/assets/`. | P1 | 1 |

---

## Epic 2 — Brand & Visual Design System
**Goal:** a distinctive dark + deep-red visual identity, applied consistently.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 2.1 | As a visitor, I want a cohesive dark background with deep-red accents, so that the site feels intentional and premium rather than a generic template. | CSS custom properties define the palette (`--color-bg`, `--color-red`, `--color-red-bright`, etc.) and are used site-wide. | P1 | 3 |
| 2.2 | As a visitor, I want gradients used deliberately (hero glow, buttons, panels), so that the palette feels blended, not flat. | At least hero background, primary buttons, and project-card media use a red-to-dark gradient. | P1 | 2 |
| 2.3 | As a visitor, I want clear typographic hierarchy, so that I can scan the page quickly. | A display serif (Fraunces) is used for headings, a sans (IBM Plex Sans) for body copy, and a mono face (IBM Plex Mono) for small labels/tags. | P1 | 2 |
| 2.4 | As a developer, I want reusable button and tag styles, so that new sections stay visually consistent. | `.btn--primary`, `.btn--ghost`, `.tag-list` classes exist and are reused across at least 4 components. | P2 | 2 |

---

## Epic 3 — Core Site Structure & Navigation
**Goal:** a header and footer that make the site easy to navigate on any device.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 3.1 | As a visitor, I want a sticky header with clear navigation, so that I can jump between pages without scrolling back up. | Header stays visible on scroll; links to Home, About, Projects, Contact. | P1 | 2 |
| 3.2 | As a mobile visitor, I want a hamburger menu, so that navigation doesn't crowd a small screen. | Nav collapses into a toggle button below 860px width; opens/closes on tap. | P1 | 3 |
| 3.3 | As a visitor, I want a footer with contact links and site links, so that I can find contact info from any page. | Footer includes email, WhatsApp link, and site navigation, repeated on every page. | P2 | 2 |

---

## Epic 4 — Homepage Experience
**Goal:** the homepage answers "who is this and why should I care" in seconds.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 4.1 | As a visitor, I want an immediate, clear headline about what Nonso does, so that I don't have to dig for it. | Hero section shows a headline, one-sentence value proposition, and two calls to action above the fold on desktop and mobile. | P1 | 3 |
| 4.2 | As a visitor, I want a snapshot of skills/services, so that I can quickly judge fit for my project. | A services section lists 4 service areas with the tools used for each. | P1 | 2 |
| 4.3 | As a visitor, I want a preview of top projects on the homepage, so that I can see proof of work without navigating away. | Homepage shows 2 featured projects with a link to view all. | P1 | 2 |
| 4.4 | As a visitor, I want to understand how a project would run before I commit to contacting anyone, so that I know what to expect. | A 4-step "how a project runs" section is visible on the homepage. | P2 | 2 |
| 4.5 | As a visitor, I want answers to common questions, so that I don't need to ask them over chat. | An FAQ accordion with at least 4 questions is present. | P2 | 2 |

---

## Epic 5 — Projects / Portfolio Showcase
**Goal:** projects read as case studies, not just a gallery.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 5.1 | As a visitor, I want a dedicated projects page listing all work, so that I can see the full portfolio in one place. | `/projects` renders all entries from `data/projects.js`. | P1 | 2 |
| 5.2 | As a visitor, I want each project to state the problem and the solution, not just a screenshot, so that I understand the thinking behind it. | Each project entry includes `problem` and `solution` fields, surfaced in the UI or available for a future detail view. | P2 | 3 |
| 5.3 | As a visitor, I want to see the tech stack per project, so that I can judge technical range. | Each project card lists its stack as tags. | P1 | 1 |
| 5.4 | As a developer, I want project data separated from UI, so that adding a new project doesn't require touching component code. | Adding a project means adding one object to `data/projects.js`. | P1 | 1 |

---

## Epic 6 — About & Credibility
**Goal:** establish trust with background, skills, and working style.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 6.1 | As a visitor, I want to read about Nonso's background and training, so that I understand the experience level. | About page states training background and shipped-project count. | P1 | 2 |
| 6.2 | As a visitor, I want a categorized skills list, so that I can quickly check for the tools my project needs. | Skills grouped into Core / Tooling / Also comfortable with. | P2 | 1 |
| 6.3 | As a visitor, I want real client feedback, so that I can trust the quality of work. | Testimonials section present (placeholder content flagged for replacement with real quotes). | P3 | 1 |

---

## Epic 7 — Marketing Conversion Features
**Goal:** make it as easy as possible to start a conversation.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 7.1 | As a visitor, I want a floating WhatsApp button visible on every page, so that I can message instantly without hunting for contact info. | A fixed-position WhatsApp button appears bottom-right on all pages, opens `wa.me` with a pre-filled message. | P1 | 2 |
| 7.2 | As a visitor, I want an embedded map showing the general location, so that I know where the developer is based. | Contact page embeds a Google Map via iframe (no API key dependency). | P1 | 2 |
| 7.3 | As a visitor, I want a working contact form, so that I can send project details without opening my email app manually. | Form validates name/email/message and opens a pre-filled email on submit; inline errors shown for invalid input. | P1 | 3 |
| 7.4 | As a visitor, I want clear calls to action repeated through the site, so that I always know the next step. | "Start a project" / "Talk about a project" CTAs appear in the header, hero, and homepage project section. | P2 | 1 |

---

## Epic 8 — SEO & Discoverability
**Goal:** the site is findable and reads correctly when shared.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 8.1 | As a site owner, I want unique titles and meta descriptions per page, so that search engines and shared links show relevant text. | Each page sets its own `<title>` and meta description via the `SEO` component. | P1 | 2 |
| 8.2 | As a site owner, I want Open Graph and Twitter card tags, so that links look good when shared on social/chat apps. | `index.html` and `SEO` component set `og:title`, `og:description`, `og:image`, `twitter:card`. | P1 | 1 |
| 8.3 | As a site owner, I want a sitemap and robots file, so that search engines can crawl the site efficiently. | `sitemap.xml` and `robots.txt` exist in `public/` and list all four pages. | P1 | 1 |
| 8.4 | As a site owner, I want semantic HTML, so that both SEO crawlers and screen readers understand the page structure. | One `<h1>` per page, `<header>`/`<main>`/`<footer>` landmarks used, images have `alt` text. | P1 | 2 |

---

## Epic 9 — Responsive Design & Accessibility QA
**Goal:** the site holds up on any device and is usable by keyboard/screen-reader users.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 9.1 | As a mobile visitor, I want all sections to reflow cleanly, so that nothing overlaps or overflows on a small screen. | Layout verified at 375px, 768px, 1024px, 1440px widths; grids collapse to 1–2 columns on mobile. | P1 | 3 |
| 9.2 | As a keyboard user, I want visible focus states, so that I can navigate without a mouse. | All interactive elements show a visible focus outline. | P2 | 1 |
| 9.3 | As a visitor sensitive to motion, I want reduced animation when my system requests it, so that the site doesn't cause discomfort. | `prefers-reduced-motion` media query disables non-essential transitions. | P3 | 1 |
| 9.4 | As a visitor, I want fast load times, so that I don't bounce before the page renders. | Production build is code-split by Vite defaults; images use `loading="lazy"`. | P2 | 2 |

---

## Epic 10 — Deployment & Launch
**Goal:** ship the site to a real, shareable URL.

| ID | Story | AC | Priority | Points |
|----|-------|----|----------|--------|
| 10.1 | As a site owner, I want the site built and deployed to a static host, so that it's publicly reachable. | `npm run build` output deployed to Netlify/Vercel/GitHub Pages; live URL loads all four pages. | P1 | 2 |
| 10.2 | As a site owner, I want real content swapped in (photos, project links, phone number), so that the live site isn't showing placeholders. | All placeholder values in `config.js`, `data/*.js`, and `index.html` replaced with real details. | P1 | 3 |
| 10.3 | As a site owner, I want a custom domain connected, so that the site has a professional URL instead of a subdomain. | Domain DNS points to the host; `sitemap.xml`/`robots.txt`/canonical tags updated to match. | P2 | 2 |

---

## Suggested sprint grouping (2-week sprints, solo developer pace)

- **Sprint 1:** Epics 1–3 (foundation, design system, navigation)
- **Sprint 2:** Epics 4–5 (homepage, projects showcase)
- **Sprint 3:** Epics 6–7 (about page, conversion features)
- **Sprint 4:** Epics 8–10 (SEO polish, responsive/accessibility QA, deployment)

This grouping front-loads everything a client would see first (navigation, homepage,
proof of work) and ends with the technical polish that's easy to verify once content is final.
