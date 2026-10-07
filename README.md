# Uweoma Adewale — Developer Portfolio

A fast, minimalist, dark‑themed portfolio for a backend developer, built with
**Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

- Static, SEO‑ready (Open Graph image, metadata, favicon)
- Fully responsive (320 → 1440px+) and accessible (semantic HTML, keyboard nav, visible focus)
- No fake data, no broken links — unset links hide themselves automatically
- Everything you'd want to edit lives in **two or three files**

---

## Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)      |
| Language    | TypeScript (strict)                     |
| Styling     | Tailwind CSS v4 (CSS‑first `@theme`)    |
| Icons       | lucide-react + inline brand SVGs        |
| Fonts       | Geist + Geist Mono (`next/font`)        |

---

## Getting started (run locally)

> Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
```

```bash
npm run dev
```

Then open **http://localhost:3001** in your browser. *(The dev server is set to
port 3001 in `package.json`; change `-p 3001` there if you prefer another port.)*

### Available scripts

| Command             | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the dev server (hot reload)           |
| `npm run build`     | Production build                            |
| `npm run start`     | Serve the production build locally          |
| `npm run lint`      | Run ESLint                                  |
| `npm run typecheck` | Type‑check with `tsc` (no emit)             |

---

## Customizing the site (no component edits needed)

Almost everything is data‑driven. Edit these files and the UI updates itself:

### 1. `src/config/site.ts` — your details

- **Name, role, location, descriptions, availability** — plain text.
- **Contact** (`contact` export):
  ```ts
  export const contact = {
    email: "YOUR_EMAIL",            // -> "you@example.com"
    linkedin: "YOUR_LINKEDIN_URL",  // -> "https://www.linkedin.com/in/your-handle"
    github: "https://github.com/uweoma",
  };
  ```
  Any value left starting with `YOUR_` is treated as **not set**: the matching
  link/button is hidden or disabled, so the site never ships a broken link.
  Fill it in and the link appears automatically.
- **Nav links, focus areas, journey areas, "currently exploring"** — simple arrays.

### 2. `src/data/projects.ts` — your projects

Each project:

```ts
{
  name: "Project Name",
  category: "Backend / REST API",
  description: "What it does.",
  technologies: ["Node.js", "PostgreSQL", ...],
  github: "https://github.com/uweoma/your-repo", // omit or undefined to hide
  liveDemo: "https://...",                        // omit to hide
  featured: true,                                 // optional "Featured" badge
}
```

- Leave `github`/`liveDemo` **undefined** (or as a `YOUR_...` placeholder) and the
  button simply won't render — paste a URL later and it appears on its own.
- **BufaHair** is linked to its GitHub repo; its `liveDemo` is still a
  placeholder (`YOUR_BUFAHAIR_LIVE_URL`) — add the deployment URL to show the
  Live Demo button.

### 3. `src/data/skills.ts` — your skills

Grouped into categories with a lucide icon and a list of skill badges. Add,
remove, or reorder freely.

### Theme / colors

All colors, fonts, and the accent are CSS variables in `src/app/globals.css`
under the `@theme { … }` block. Change `--color-accent` to re‑skin the site.

---

## Deploy free on Vercel

Vercel is the easiest free host for Next.js.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/uweoma/<your-portfolio-repo>.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to <https://vercel.com/new> and sign in with GitHub.
   - Select your portfolio repository → **Import**.
   - Framework preset is auto‑detected as **Next.js**. Leave the defaults
     (build command `next build`, output handled automatically).
   - Click **Deploy**.

3. **(Optional) Set your real URL for SEO**
   - In Vercel → **Project → Settings → Environment Variables**, add:
     - `NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app` (or your custom domain)
   - Redeploy so Open Graph / canonical URLs use the correct domain.

4. **(Optional) Custom domain** — add it under **Settings → Domains**.

Every push to `main` redeploys automatically.

---

## Project structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + design tokens (@theme)
│   ├── layout.tsx           # <html>, metadata/SEO, Navbar + Footer
│   ├── page.tsx             # Composes all sections
│   ├── icon.svg             # Favicon (">_" mark)
│   ├── apple-icon.tsx       # Apple touch icon
│   └── opengraph-image.tsx  # Social share image (1200×630)
├── components/              # Navbar, Hero, About, Skills, Projects, …
│   └── ui/Button.tsx        # Polymorphic link/button
├── config/site.ts           # ← your details
├── data/
│   ├── projects.ts          # ← your projects
│   └── skills.ts            # ← your skills
└── lib/utils.ts             # helpers (cn, isConfigured)
```

---

© 2026 Uweoma Adewale.
