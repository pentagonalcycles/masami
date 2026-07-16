# How to Add a New Retreat

This guide explains how to add a new retreat to the website. You do not need to be a developer — just follow these steps carefully.

---

## What You Need Before You Start

1. **Retreat information** — dates, location, description, highlights, trip details
2. **Images** — at least one main image and optionally a promotional flyer/poster
3. **Access to the project files** (or ask your developer to do steps 4–6)

---

## Step 1: Prepare Your Images

Put your retreat images in the folder:

```
public/images/retreats/
```

Use short, descriptive filenames (no spaces, use hyphens), for example:
- `retreat-bali-2027.jpg`
- `bali-flyer.jpg`

**Recommended image specs:**
- Main photo: at least 1200px wide, JPG format
- Flyer/poster: square or 4:5 ratio, JPG or PNG

---

## Step 2: Add the Retreat Data

Open this file:

```
src/data/site-data.ts
```

Find the section that starts with:

```ts
export const featuredRetreats = [
```

You will see the existing retreat(s) listed. **Copy the last retreat block** (from the opening `{` to the closing `},`) and paste it after the last one. Then update every field with your new retreat's information.

### Required Fields

| Field | What to put | Example |
|-------|-------------|---------|
| `slug` | A short unique ID (no spaces, use hyphens) | `"sacred-bali-journey"` |
| `badge` | Optional label shown on the card | `"NEW"` or `"SOLD OUT"` or `"COMING SOON"` |
| `title` | The retreat name | `"Sacred Bali Journey"` |
| `subtitle` | A one-line description | `"A 7-Day Healing Pilgrimage in the Heart of Bali"` |
| `location` | Where it takes place | `"Bali, Indonesia"` |
| `dates` | The retreat dates | `"15–22 March 2027"` |
| `image` | Path to the main photo | `"/images/retreats/retreat-bali-2027.jpg"` |
| `flyerImage` | Path to the flyer/poster (optional) | `"/images/retreats/bali-flyer.jpg"` |
| `shortDescription` | 2–3 sentences for the home page card | `"Join us for..."` |
| `fullDescription` | Longer description for the retreats page | `"The call to..."` |
| `highlights` | List of 4–6 experiences | See format below |
| `tripDetails` | Practical info | See format below |
| `contactEmail` | Email for inquiries | `"masami@luminousearth.com"` |
| `status` | **Critical:** Where it appears on the page | `"upcoming"` or `"past"` |

### How `status` Works

The `status` field controls which section of the retreats page the retreat appears in:

- `"upcoming"` — Shown in the **Upcoming Retreats** section with full details (flyer, description, trip details, highlights, contact button)
- `"past"` — Shown in the **Past Retreats** section as a compact card (image, title, dates, location, brief description)

**When a retreat finishes, simply change its `status` from `"upcoming"` to `"past"`.** The retreat will automatically move from the Upcoming section to the Past section. No other changes needed.

### Highlights Format

Each highlight is an object with a `title` and `description`:

```ts
highlights: [
  {
    title: "Temple Visits",
    description: "Visit ancient water temples and participate in traditional blessing ceremonies.",
  },
  {
    title: "Daily Yoga",
    description: "Morning yoga sessions overlooking the rice terraces.",
  },
  // Add 2–4 more...
],
```

### Trip Details Format

```ts
tripDetails: {
  dates: "15–22 March 2027",
  groupSize: "Limited to 8 participants",
  startEnd: "Begins in Ubud (14:00 on 15th) | Ends with airport drop-off",
  activityLevel: "Moderate. Some walking on uneven terrain",
},
```

### Important: Check Your Commas

- Every line inside an object must end with a comma `,`
- The **last** item in a list must **NOT** have a comma after it
- If you are adding a new retreat after an existing one, make sure the previous retreat's closing `},` is followed by your new retreat block

---

## Step 3: Save and Test Locally (Optional)

If you have the development environment running:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see your changes.

If you do not have the dev environment, skip this step and proceed to Step 4.

---

## Step 4: Commit and Push

Run these commands in your terminal:

```bash
git add -A
git commit -m "feat: add [Retreat Name] retreat"
git push origin main
```

**What this does:**
- `git add -A` — stages your new images and data changes
- `git commit` — saves the changes with a message
- `git push` — sends everything to the server

Vercel will automatically detect the push and deploy the updated website (usually within 60 seconds).

---

## Step 5: Verify on the Live Site

1. Go to your website's home page — the new retreat card should appear in the "Upcoming Retreat" section
2. Click "Learn More" on the card — it should scroll to the retreat details on the `/retreats` page
3. Check that the image, dates, location, and description are all correct

---

## Example: Complete New Retreat Block

Here is a full example you can copy and adapt:

```ts
  {
    slug: "sacred-bali-journey",
    badge: "NEW",
    title: "Sacred Bali Journey",
    subtitle: "A 7-Day Healing Pilgrimage in the Heart of Bali",
    location: "Bali, Indonesia",
    dates: "15–22 March 2027",
    image: "/images/retreats/retreat-bali-2027.jpg",
    flyerImage: "/images/retreats/bali-flyer.jpg",
    shortDescription:
      "Join an intimate circle for a week of healing, connection, and spiritual growth in the magical landscape of Bali.",
    fullDescription:
      "Bali is a land of sacred temples, lush jungle, and deep spiritual tradition. On this retreat, we will immerse ourselves in the island's healing energy through daily practice, temple visits, and connection with the land.",
    highlights: [
      {
        title: "Temple Visits",
        description: "Visit ancient water temples and participate in traditional blessing ceremonies.",
      },
      {
        title: "Daily Yoga",
        description: "Morning yoga sessions overlooking the rice terraces.",
      },
      {
        title: "Sound Healing",
        description: "Experience transformative sound healing in a sacred jungle setting.",
      },
      {
        title: "Sisterhood",
        description: "Connect deeply with an intimate circle of like-minded women.",
      },
    ],
    tripDetails: {
      dates: "15–22 March 2027",
      groupSize: "Limited to 8 participants",
      startEnd: "Begins in Ubud (14:00 on 15th) | Ends with airport drop-off",
      activityLevel: "Moderate. Some walking on uneven terrain",
    },
    contactEmail: "masami@luminousearth.com",
    status: "upcoming",
  },
```

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Image does not show | Wrong file path in `image` or `flyerImage` | Check that the file exists in `public/images/retreats/` and the path starts with `/images/...` |
| Website won't build | Missing comma or extra comma in `site-data.ts` | Check commas after every line — only the last item in a list should have no comma |
| Retreat does not appear on home page | `featuredRetreats` array is empty or has a syntax error | Check that your new block is inside the `[` and `]` of the array |
| "Learn More" link doesn't scroll | `slug` contains spaces or special characters | Use only lowercase letters, numbers, and hyphens in the `slug` |

---

## Hidden Retreat Pages

Some retreats have hidden day-by-day itinerary pages that are accessible via direct URL only (no links from other pages).

**Current hidden pages:**
- Walking the Path of Mary Magdalene: `/retreats/walking-the-path-of-mary-magdalene`

These pages are created as separate files in `src/app/retreats/[retreat-slug]/page.tsx`.

---

## Need Help?

If you get stuck, share:
1. The exact error message (if any)
2. The retreat block you added (copy-paste it)
3. A screenshot of what you see on the website

This will help your developer diagnose the issue quickly.
