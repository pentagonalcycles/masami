# Next Steps

Tasks that still need to be completed before and after launch.

## Critical (Must Do Before Launch)

### 1. Verify Wix Booking Links (Required for Bookings) ✅
- The `bookingUrl` values in `src/data/site-data.ts` point to `book.luminousrebirth.com/booking-calendar/...`
- Booking links have been tested and confirmed working
- Wix Bookings service remains active on the `book` subdomain

### 2. Wire Contact Form to Email Service ✅
- Contact form now sends emails via Resend API at `src/app/api/contact/route.ts`
- Requires `RESEND_API_KEY` environment variable in `.env.local` or Vercel dashboard
- Update `src/components/ContactForm.tsx` to POST to the API route
- Add environment variables for the API key

### 3. Wire Newsletter Signup
- Choose an email marketing platform: Mailchimp, ConvertKit, Buttondown, or similar
- Update `src/components/NewsletterSignup.tsx` to POST to an API route
- Create the API route at `src/app/api/newsletter/route.ts`
- Add environment variables for the API key

### 4. Replace Email Addresses ✅
- Email addresses across the codebase have been verified and updated
- `masami@luminousrebirth.com` is used consistently

### 5. Verify Domain and DNS ✅
- `www.luminousrebirth.com` points to Vercel via CNAME → `cname.vercel-dns.com`
- `luminousrebirth.com` (root) points to Vercel via A record → `216.198.79.1`
- `book.luminousrebirth.com` points to Wix via CNAME → `cdn1.wixdns.net`
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for DNS configuration

## Important (Do Soon After Launch)

### 6. Replace Remaining Images with High-Resolution Originals
- Log into the Wix dashboard for luminousrebirth.com
- Go to Media > My Uploads
- Download all original photos (not the compressed versions)
- Place them in `public/images/`
- Update image paths in `src/data/site-data.ts` and page files
- Delete the Wix CDN references once local images are in place
- **Done:** Retreat images (Mary Magdalene flyer + Masami walking photo) already added to `public/images/retreats/`

### 7. Wire Gift Card Purchase ✅
- Footer eGift Card link now points to `book.luminousrebirth.com/gift-card`
- Gift card purchase handled through Wix booking site

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
