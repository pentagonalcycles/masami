# Retreat Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the France retreat ("Walking the Path of Mary Magdalene") to the website with a featured card on the home page and full details on the retreats page, structured to scale for future retreats.

**Architecture:** Extend `site-data.ts` with a structured `featuredRetreats` array. Create a `RetreatFeatureCard` component for the home page. Restructure the retreats page to show the general intro, then featured retreats, then the inquiry form. Keep existing sacred journeys content on the home page as-is.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, Framer Motion (via FadeIn), Lucide React, next/image.

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/data/site-data.ts` | Modify | Add `featuredRetreats` array and update `retreats` object |
| `src/components/RetreatFeatureCard.tsx` | Create | Home page card component for a featured retreat |
| `src/app/page.tsx` | Modify | Add featured retreat section after Sacred Journeys two-column |
| `src/app/retreats/page.tsx` | Modify | Add featured retreat detail section between highlights and inquiry form |

---

### Task 1: Add retreat data to `site-data.ts`

**Files:**
- Modify: `src/data/site-data.ts`

- [ ] **Step 1: Add the `featuredRetreats` export after the existing `retreats` export**

Add this after the `retreats` closing brace (after line 251):

```ts
export const featuredRetreats = [
  {
    slug: "walking-the-path-of-mary-magdalene",
    badge: "NEW",
    title: "Walking the Path of Mary Magdalene",
    subtitle: "A Sacred Feminine Pilgrimage through Provence & Cathar Country",
    location: "Southern France",
    dates: "10–17 October 2026",
    image:
      "https://static.wixstatic.com/media/c1e158_c107ad10e662482abef96463c1921eac~mv2.jpg",
    shortDescription:
      "Join an intimate circle of women for an eight-day pilgrimage through the mystical landscapes of Provence and Cathar Country. Walk sacred sites shaped by the enduring teachings of Mary Magdalene.",
    fullDescription:
      "The call to walk the path of Mary Magdalene is a whisper, a remembrance of something ancient and divine within your heart. In the mystical landscapes of Languedoc and Provence, we enter a sanctuary where sacred lineage is ready to awaken your potential for profound spiritual growth. This journey weaves together legends, sacred lands, and spiritual energies — where Templar history, Cathar wisdom, and Magdalene teachings converge to create an experience of deep expansion rooted in love, joy, and wholeness.",
    highlights: [
      {
        title: "Caves & Forests",
        description:
          "Hike through druidic woodlands, visit La Sainte-Baume — the 'womb of the Magdalene' — and La Grotte aux Oeufs.",
      },
      {
        title: "Black Madonna",
        description:
          "Visit the coastal sanctuary of Saintes-Maries-de-la-Mer and discover the mysteries of Sarah, the Black Madonna.",
      },
      {
        title: "Stronghold Castles",
        description:
          "Climb Montségur Castle, the final Cathar stronghold, and explore the cosmic portal encoded at Rennes-le-Château.",
      },
      {
        title: "Vortexes",
        description:
          "Experience the powerful energy vortex at Bugarach, known as the 'upside-down mountain' and a gateway to higher consciousness.",
      },
      {
        title: "Sound Healing",
        description:
          "Indulge in an exclusive channeled sound healing session in a sacred setting.",
      },
      {
        title: "Sisterhood",
        description:
          "Connect deeply with an intimate circle of like-minded women in a nurturing, transformative environment.",
      },
    ],
    tripDetails: {
      dates: "10–17 October 2026",
      groupSize: "Limited to 7 participants",
      startEnd:
        "Begins in Marseille (18:00 on 10th) | Ends with drop-off in Marseille",
      activityLevel:
        "Moderate. Some days will involve trekking to mountain summits",
    },
    contactEmail: "masami@luminousearth.com",
  },
];
```

- [ ] **Step 2: Verify the data is syntactically correct**

Run: `npx tsc --noEmit`
Expected: No errors related to `site-data.ts`

- [ ] **Step 3: Commit**

```bash
git add src/data/site-data.ts
git commit -m "feat: add featured retreat data for France pilgrimage"
```

---

### Task 2: Create `RetreatFeatureCard` component

**Files:**
- Create: `src/components/RetreatFeatureCard.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

interface RetreatFeatureCardProps {
  badge?: string;
  title: string;
  subtitle: string;
  location: string;
  dates: string;
  image: string;
  shortDescription: string;
  slug: string;
}

export function RetreatFeatureCard({
  badge,
  title,
  location,
  dates,
  image,
  shortDescription,
  slug,
}: RetreatFeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-light mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gold" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            <span>{location}</span>
          </div>
        </div>
        <h3 className="heading-sm text-charcoal mb-2">{title}</h3>
        <p className="text-text-light text-sm leading-relaxed mb-6">
          {shortDescription}
        </p>
        <Link href={`/retreats#${slug}`} className="btn-secondary text-sm">
          Learn More
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the component compiles**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/RetreatFeatureCard.tsx
git commit -m "feat: add RetreatFeatureCard component"
```

---

### Task 3: Add featured retreat section to the home page

**Files:**
- Modify: `src/app/page.tsx:8-11` (imports)
- Modify: `src/app/page.tsx:278-281` (after Sacred Journeys two-column section)

- [ ] **Step 1: Update the import to include `featuredRetreats` and `RetreatFeatureCard`**

Change line 8 from:
```ts
import { services, testimonials, retreats } from "@/data/site-data";
```
to:
```ts
import { services, testimonials, retreats, featuredRetreats } from "@/data/site-data";
```

Add import after line 11 (after `ImageLightbox` import):
```ts
import { RetreatFeatureCard } from "@/components/RetreatFeatureCard";
```

- [ ] **Step 2: Add the featured retreat section after the Sacred Journeys two-column section (after line 278, before the SacredJourneysBanner)**

Insert this between the closing `</section>` on line 278 and the `{/* Sacred Journeys */}` comment on line 280:

```tsx
      {/* Featured Retreat */}
      {featuredRetreats.length > 0 && (
        <section className="section-padding bg-cream-dark">
          <div className="container-wide">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                  Upcoming Retreat
                </p>
                <h2 className="heading-lg text-charcoal">
                  Sacred Journeys
                </h2>
                <p className="text-text-light max-w-2xl mx-auto mt-4 text-body">
                  Join Masami on transformative pilgrimages to sacred sites.
                  Walk ancient lands, connect with spiritual lineages, and
                  return home transformed.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRetreats.map((retreat, i) => (
                <FadeIn key={retreat.slug} delay={i * 0.1}>
                  <RetreatFeatureCard
                    badge={retreat.badge}
                    title={retreat.title}
                    subtitle={retreat.subtitle}
                    location={retreat.location}
                    dates={retreat.dates}
                    image={retreat.image}
                    shortDescription={retreat.shortDescription}
                    slug={retreat.slug}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
```

- [ ] **Step 3: Verify the page renders correctly**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add featured retreat section to home page"
```

---

### Task 4: Add featured retreat detail to the retreats page

**Files:**
- Modify: `src/app/retreats/page.tsx:1-6` (imports)
- Modify: `src/app/retreats/page.tsx:159-181` (before inquiry form section)

- [ ] **Step 1: Update imports**

Add `featuredRetreats` to the existing site-data import on line 4:
```ts
import { retreats, featuredRetreats } from "@/data/site-data";
```

Add `Calendar` to the lucide-react import on line 5:
```ts
import { MapPin, Users, Sparkles, Heart, Compass, Calendar } from "lucide-react";
```

- [ ] **Step 2: Add the featured retreat detail section before the inquiry form**

Insert this between the closing `</section>` of the highlights (line 159) and the `{/* Inquiry Form */}` comment (line 161):

```tsx
      {/* Featured Retreats */}
      {featuredRetreats.map((retreat) => (
        <section
          key={retreat.slug}
          id={retreat.slug}
          className="section-padding"
        >
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <FadeIn direction="left">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={retreat.image}
                    alt={retreat.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.1}>
                <div>
                  {retreat.badge && (
                    <span className="inline-block bg-gold text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                      {retreat.badge}
                    </span>
                  )}
                  <h2 className="heading-lg text-charcoal mb-2">
                    {retreat.title}
                  </h2>
                  <p className="text-text-light text-body italic mb-6">
                    {retreat.subtitle}
                  </p>
                  <p className="text-text text-body mb-6">
                    {retreat.fullDescription}
                  </p>

                  {/* Trip Details */}
                  <div className="bg-cream rounded-xl p-6 mb-8">
                    <h3 className="font-heading text-xl text-charcoal mb-4">
                      Trip at a Glance
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2">
                        <Calendar
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-text-light">Dates</p>
                          <p className="text-charcoal font-medium">
                            {retreat.tripDetails.dates}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-text-light">Group Size</p>
                          <p className="text-charcoal font-medium">
                            {retreat.tripDetails.groupSize}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-text-light">Start / End</p>
                          <p className="text-charcoal font-medium">
                            {retreat.tripDetails.startEnd}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Compass
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-text-light">Activity Level</p>
                          <p className="text-charcoal font-medium">
                            {retreat.tripDetails.activityLevel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="font-heading text-xl text-charcoal mb-4">
                      Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {retreat.highlights.map((h) => (
                        <div
                          key={h.title}
                          className="bg-cream rounded-xl p-4"
                        >
                          <h4 className="font-medium text-charcoal text-sm mb-1">
                            {h.title}
                          </h4>
                          <p className="text-text-light text-sm leading-relaxed">
                            {h.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-charcoal rounded-xl p-6 text-white">
                    <p className="text-sm text-white/70 mb-2">
                      Ready to join this sacred journey?
                    </p>
                    <p className="text-sm text-white/70 mb-4">
                      Contact Masami to receive the full itinerary brochure or
                      ask any questions.
                    </p>
                    <a
                      href={`mailto:${retreat.contactEmail}`}
                      className="btn-primary text-sm"
                    >
                      Contact Masami
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}
```

- [ ] **Step 3: Verify the page renders correctly**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/retreats/page.tsx
git commit -m "feat: add featured retreat details to retreats page"
```

---

### Task 5: Final verification

**Files:** None (verification only)

- [ ] **Step 1: Run lint and build**

```bash
npm run lint && npm run build
```
Expected: Both pass with no errors

- [ ] **Step 2: Start dev server and visually verify**

```bash
npm run dev
```

Check:
1. Home page shows the featured retreat card with "NEW" badge, image, dates, location, description, and "Learn More" button
2. "Learn More" links to `/retreats#walking-the-path-of-mary-magdalene`
3. Retreats page shows the hero, about section, highlights, then the full France retreat detail with "Trip at a Glance" and "Highlights" sections
4. Contact CTA links to `masami@luminousearth.com`
5. Inquiry form still appears at the bottom
6. Mobile responsiveness looks correct

- [ ] **Step 3: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: visual adjustments for retreat feature"
```
