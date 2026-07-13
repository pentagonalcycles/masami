<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# AGENTS.md

Instructions for AI coding agents working on this project.

## Project Context (Migration Status)

This project was originally developed on a **Linux Ubuntu desktop** by Marco (the original developer) and was migrated to a **macOS MacBook Air** controlled by Masami (the project owner) in **July 2026**.

| Detail | Value |
|---|---|
| **Current platform** | macOS (Apple Silicon) |
| **Project path** | `/Users/masami/Desktop/Ai projects/Websites/masami` |
| **Node.js** | v26.5.0 (managed via nvm) |
| **Git repo** | `pentagonalcycles/masami` on GitHub |
| **Git remote** | `git@github.com:pentagonalcycles/masami.git` (SSH, passwordless) |
| **Deployment** | Vercel — auto-deploys on push to `main` |
| **Vercel dashboard** | `https://vercel.com/pentagonalcycles-projects/masami` |
| **Vercel owner** | Marco (pentagonalcycles) |
| **Live site** | `luminousrebirth.com` |

### Who does what

- **Masami** — project owner, pushes code to GitHub from macOS
- **Marco** — original developer, owns the Vercel account, manages DNS and Vercel settings

### Deployment workflow

1. Masami makes changes locally
2. AI agent runs `npm run lint && npm run build` to verify
3. AI agent commits changes with descriptive message
4. AI agent pushes to `main` branch via SSH (no password required)
5. Vercel auto-deploys the changes to production (~60 seconds)
6. For Vercel settings (env vars, domains), contact Marco

### Important notes for AI agents

- When running npm commands, source nvm first: `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
- Always run `npm run lint && npm run build` after making changes
- Do not commit `MIGRATION.md` — it is a local-only reference file
- SSH is configured for passwordless GitHub access — use `git push origin main` directly
- SSH agent must be running for git push — use `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519` if needed

## Tech Stack

- **Next.js 16** with App Router (NOT Pages Router)
- **TypeScript** -- all files are `.tsx` or `.ts`
- **Tailwind CSS v4** -- uses CSS-based config via `@theme` in `globals.css`, NOT `tailwind.config.js`
- **Framer Motion** for animations (client components with `"use client"`)
- **Lucide React** for icons (check availability before importing -- not all icons exist)

## Code Conventions

- Server components by default. Add `"use client"` only when needed (interactivity, hooks, event handlers)
- All content data lives in `src/data/site-data.ts` -- update there, not inline
- Service pages use the shared `ServicePageTemplate` component
- Retreat page (`/retreats`) displays featured retreats from `site-data.ts` (general intro + featured retreat details + inquiry form)
- Retreat page (`/retreats`) uses `RetreatInquiryForm` for interest registration
- Cancellation policy page at `/cancellation-policy`
- Home page shows `RetreatFeatureCard` for upcoming retreats
- Home page shows `RetreatFeatureCard` for upcoming retreats
- Use `FadeIn` wrapper for scroll-triggered animations
- Tailwind classes only -- no inline styles, no CSS modules
- Responsive-first: design mobile, then `md:`, `lg:` breakpoints
- Use `next/image` for all images (Wix CDN already configured in `next.config.ts`)
- Use `next/link` for internal navigation, `<a>` for external

## File Structure Rules

- Pages go in `src/app/<route>/page.tsx`
- Shared components go in `src/components/`
- Data/config goes in `src/data/`
- No `src/pages/` directory -- this is App Router only

## Important Constraints

- Do NOT add dependencies without checking `package.json` first
- Images from `static.wixstatic.com` are already allowed in `next.config.ts`
- The booking system is Wix Bookings (links in `WixBookingsEmbed.tsx`)
- Contact/newsletter forms use Resend API (requires `RESEND_API_KEY` env var)
- Retreat inquiry form also uses Resend API
- Do not hardcode dates or prices inline -- use `site-data.ts`
- Lint and build must pass: `npm run lint && npm run build`

## Design Tokens

Referenced from `globals.css`:
- Gold accent: `#C9A96E`
- Cream background: `#FAF6F0`
- Charcoal (burgundy): `#890048` — deep burgundy/maroon, used for hero sections, footer, trust bar, and headings
- Charcoal light: `#A00055`
- Heading font: `font-heading` (Cormorant Garamond)
- Body font: `font-body` (DM Sans)

## Image Overlay Convention

For sections with images behind text (heroes, banners, service cards):
- Use **neutral dark overlays** (`from-black/60 via-black/30 to-transparent`) rather than brand-colored overlays — this preserves natural image colors
- Use `bg-charcoal` as the background behind `object-contain` images so empty sides show the brand color
- Do NOT add CSS `brightness-*` filters to images — the original photos are well-exposed

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build (must pass)
npm run lint   # ESLint (must pass)
```
