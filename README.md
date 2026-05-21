# Luminous Rebirth

Website for Masami Noro -- Craniosacral Therapy and Energy Healing in Glastonbury, London, and remotely.

**Domain:** [luminousrebirth.com](https://www.luminousrebirth.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata, JSON-LD)
    page.tsx            # Homepage
    globals.css         # Design system (Tailwind v4 theme)
    sitemap.ts          # Auto-generated XML sitemap
    robots.ts           # SEO robots.txt
    about/page.tsx      # About Masami
    contact/page.tsx    # Contact form + info
    testimonials/page.tsx # Filterable testimonials
    journal/page.tsx    # Blog index
    journal/[slug]/page.tsx # Individual blog posts
    gift-card/page.tsx  # eGift card
    services/
      page.tsx                          # Services index
      craniosacral-glastonbury/page.tsx  # Individual service
      craniosacral-london/page.tsx
      mother-baby/page.tsx
      energy-healing/page.tsx
      emergency/page.tsx
    privacy-policy/page.tsx
    terms/page.tsx
    refund-policy/page.tsx
  components/
    Header.tsx              # Sticky nav with mobile menu
    Footer.tsx              # Site footer with links
    FadeIn.tsx              # Scroll-triggered animation wrapper
    ServiceCard.tsx         # Service card component
    ServicePageTemplate.tsx # Shared template for service detail pages
    TestimonialCard.tsx     # Testimonial card + filterable grid
    NewsletterSignup.tsx    # Email capture form
    ContactForm.tsx         # Contact form component
    CalEmbed.tsx            # Cal.com booking integration
  data/
    site-data.ts            # All content data (services, testimonials, qualifications)
```

## Design System

Defined in `src/app/globals.css` using Tailwind v4 `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-gold` | `#C9A96E` | Primary accent, CTAs |
| `--color-gold-light` | `#D4BC8E` | Hover states |
| `--color-gold-dark` | `#8B6F47` | Active/hover dark |
| `--color-cream` | `#FAF6F0` | Page background |
| `--color-cream-dark` | `#F0EBE3` | Section backgrounds |
| `--color-charcoal` | `#1A1A2E` | Dark sections, headings |
| `--color-text` | `#2D2D2D` | Body text |
| `--color-text-light` | `#6B6B6B` | Secondary text |

**Typography:**
- Headings: Cormorant Garamond (serif)
- Body: DM Sans (sans-serif)

## Content Management

All content is stored in `src/data/site-data.ts`. To update services, testimonials, or qualifications, edit this file directly.

Blog posts are defined in `src/app/journal/[slug]/page.tsx` in the `posts` object. For a more scalable solution, migrate to MDX or a headless CMS.

## Booking

Booking links point to Cal.com. Update the `calLink` prop in `CalEmbed.tsx` or the service page templates once a Cal.com account is configured.

## Images

Images are served from the existing Wix CDN (`static.wixstatic.com`) via `next/image`. For better quality, download originals from the Wix media library and place them in `public/images/`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Vercel deployment instructions.

## Remaining Work

See [NEXT-STEPS.md](./NEXT-STEPS.md) for tasks that still need to be completed.
