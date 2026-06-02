# Next Steps

Tasks that still need to be completed before and after launch.

## Critical (Must Do Before Launch)

### 1. Set Up Cal.com Account (Required for Bookings)
- Account created at [cal.eu](https://app.cal.eu) (username: `luminousrebirth`)
- Connect a Google, Outlook, or iCloud calendar for availability sync (Settings > Calendars)
- Connect Stripe (for card payments) and/or PayPal in Settings > Apps
- Create 5 event types matching the services:
  - `craniosacral-glastonbury` -- 60 min, GBP 70
  - `craniosacral-london` -- 60 min, GBP 100
  - `mother-and-baby` -- 60 min, GBP 70
  - `energy-healing` -- 60 min, GBP 70
  - `emergency-assistance` -- 30 min, GBP 40
- Set availability for each event type (in-person vs remote, London vs Glastonbury)
- Set location for each event type (in-person for Glastonbury/London, remote for energy-healing/emergency)
- Enable promo codes per event type if needed (codes managed in Stripe dashboard)
- The `calLink` values in `src/data/site-data.ts` match these slugs (e.g., `luminousrebirth/craniosacral-glastonbury`)

### 2. Wire Contact Form to Email Service
- Choose an email service: [Resend](https://resend.com) (recommended), SendGrid, or similar
- Create an API route at `src/app/api/contact/route.ts`
- Update `src/components/ContactForm.tsx` to POST to the API route
- Add environment variables for the API key

### 3. Wire Newsletter Signup
- Choose an email marketing platform: Mailchimp, ConvertKit, Buttondown, or similar
- Update `src/components/NewsletterSignup.tsx` to POST to an API route
- Create the API route at `src/app/api/newsletter/route.ts`
- Add environment variables for the API key

### 4. Replace Email Addresses
- Search for placeholder emails across the codebase and replace with actual addresses:
  - `hello@luminousrebirth.com` -- update in `ContactForm.tsx`, `Footer.tsx`, privacy/terms/refund pages
  - `babyclinicsomerset@gmail.com` -- already correct from original site

### 5. Verify Domain and DNS
- Domain `luminousrebirth.com` must point to Vercel
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for DNS configuration

## Important (Do Soon After Launch)

### 6. Replace Images with High-Resolution Originals
- Log into the Wix dashboard for luminousrebirth.com
- Go to Media > My Uploads
- Download all original photos (not the compressed versions)
- Place them in `public/images/`
- Update image paths in `src/data/site-data.ts` and page files
- Delete the Wix CDN references once local images are in place

### 7. Wire Gift Card Purchase
- Currently a static page with placeholder buttons
- Options: integrate Stripe payment links, or keep as a "Contact to Purchase" flow
- If using Stripe, create payment links for each denomination and update the buttons

### 8. Update Mother & Baby Clinic Dates
- Currently no dynamic dates shown (the original site had hardcoded dates)
- Either: add dates to `src/data/site-data.ts` as a structured field
- Or: move dates to a CMS if Masami needs to update them herself

### 9. Add Real Blog Content
- The journal has 3 placeholder articles
- Write or commission real content based on Masami's expertise
- Consider migrating to MDX for richer content (embedded components, images)

## Enhancements (Nice to Have)

### 10. Integrate Analytics
- Add Vercel Analytics (built-in, free): `npm install @vercel/analytics`
- Optionally add Google Analytics 4 via environment variable

### 11. Add Cookie Consent Banner
- Required for GDPR compliance if using analytics/tracking
- Use a lightweight solution like `cookieconsent` or build a simple one

### 12. Add a Video Introduction
- If Masami has or creates a short video introduction
- Embed on the About page and/or homepage hero

### 13. Multi-Language Support
- Some testimonials are in French (Caroline)
- Consider adding French language support if targeting French-speaking clients
- Use Next.js i18n or a simple locale switcher

### 14. Add Google Maps Embed
- On the Contact page, embed a Google Map showing the Glastonbury location
- Requires a Google Maps API key

### 15. Performance Audit
- Run Lighthouse after launch and target 95+ across all metrics
- Images will be the biggest improvement once originals are swapped in

### 16. Social Proof Enhancements
- Add Google Reviews integration if available
- Display session count or years of experience dynamically

---

## Environment Variables Needed

Create a `.env.local` file with:

```env
# Email service (e.g., Resend)
RESEND_API_KEY=your_key_here

# Newsletter service (e.g., Mailchimp)
MAILCHIMP_API_KEY=your_key_here
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_SERVER=us1

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
```

For Vercel deployment, add these in the Vercel dashboard under Settings > Environment Variables.
