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
    retreats/page.tsx   # Sacred Journeys & Retreats
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
    cancellation-policy/page.tsx
    api/
      contact/route.ts       # Contact form email API (Resend)
      retreat-inquiry/route.ts # Retreat inquiry email API (Resend)
  components/
    Header.tsx              # Sticky nav with scroll-aware light/dark mode
    Footer.tsx              # Site footer with links
    FadeIn.tsx              # Scroll-triggered animation wrapper
    ServiceCard.tsx         # Service card component
    ServicePageTemplate.tsx # Shared template for service detail pages
    TestimonialCard.tsx     # Individual testimonial card
    TestimonialCarousel.tsx # Manual carousel with arrow navigation (1 card at a time)
    NewsletterSignup.tsx    # Email capture form
    ContactForm.tsx         # Contact form component
    WixBookingsEmbed.tsx    # Wix Bookings integration
    RetreatInquiryForm.tsx  # Retreat interest/inquiry form
    RetreatFeatureCard.tsx  # Featured retreat card (home page)
    SacredJourneysBanner.tsx # Full-width banner image
    ImageLightbox.tsx       # Click-to-expand image wrapper
    PastRetreatCard.tsx     # Compact past retreat card
  data/
    site-data.ts            # All content data (services, testimonials, qualifications, retreats, featuredRetreats)
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
| `--color-charcoal` | `#F7D1D4` | Primary brand color, section backgrounds (Mary's Rose) |
| `--color-text` | `#2D2D2D` | Body text |
| `--color-text-light` | `#6B6B6B` | Secondary text |

**Typography:**
- Headings: Cormorant Garamond (serif)
- Body: DM Sans (sans-serif)

## Content Management

All content is stored in `src/data/site-data.ts`. To update services, testimonials, qualifications, retreats, or featured retreats, edit this file directly.

### Featured Retreats

The `featuredRetreats` array in `site-data.ts` powers both the home page retreat card and the retreats page detail section. Each retreat entry includes:
- `slug`, `badge`, `title`, `subtitle`, `location`, `dates`
- `image` (main photo), `flyerImage` (promotional poster)
- `shortDescription` (card), `fullDescription` (detail page)
- `highlights[]`, `tripDetails{}`, `contactEmail`

To add a new retreat, append a new object to the `featuredRetreats` array. The home page card and retreats page will render it automatically.

Blog posts are defined in `src/app/journal/[slug]/page.tsx` in the `posts` object. For a more scalable solution, migrate to MDX or a headless CMS.

## Booking

Booking is powered by Wix Bookings on the original site. Each service has a `bookingUrl` field in `site-data.ts` pointing to the Wix Bookings calendar page. Booking buttons open the Wix calendar in a new tab where clients select a time slot and pay.

## Images

Images are served from the existing Wix CDN (`static.wixstatic.com`) via `next/image` and from `public/images/` for local assets. Retreat images have already been moved to `public/images/retreats/`. For remaining images, download originals from the Wix media library and place them in `public/images/`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Vercel deployment instructions.

## Remaining Work

See [NEXT-STEPS.md](./NEXT-STEPS.md) for tasks that still need to be completed.
