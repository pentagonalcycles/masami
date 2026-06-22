<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# AGENTS.md

Instructions for AI coding agents working on this project.

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
- Mary's Rose (charcoal): `#C2185B` — James L. Austin Rose, inspired by the rose symbolism of Mary Magdalene and the sacred feminine
- Heading font: `font-heading` (Cormorant Garamond)
- Body font: `font-body` (DM Sans)

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build (must pass)
npm run lint   # ESLint (must pass)
```
