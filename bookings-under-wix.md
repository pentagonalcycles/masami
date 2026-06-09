# Keeping Wix Bookings on a Subdomain

This guide explains how to keep the existing Wix Bookings system running on a subdomain (e.g., `book.luminousrebirth.com`) while the main website is hosted on Vercel.

## Why This Is Needed

The new Next.js website is deployed on Vercel and will eventually replace the Wix site at `www.luminousrebirth.com`. However, Wix Bookings is still used for scheduling and payments. To prevent booking links from breaking, the Wix site must remain accessible on a dedicated subdomain.

## Step-by-Step Instructions

### Step 1: Connect the Subdomain in Wix

1. Log in to your [Wix Account](https://www.wix.com/account/domains)
2. Go to **Domains** (account-level, not the site dashboard)
3. Click **Add an Existing Domain > Connect a domain you already own**
4. Select the Luminous Rebirth site and enter `book.luminousrebirth.com`
5. Wix will display DNS records to add (usually a CNAME pointing to `cdn1.wixdns.net`). Copy these values.

**Important:** If `luminousrebirth.com` is already connected to this Wix site as a primary domain, you must first **unassign** it. Wix redirects all non-primary domains to the primary domain by default, which will prevent `book.luminousrebirth.com` from resolving independently.

### Step 2: Configure DNS Records

If your domain registrar is **NameCheap** (as it is for `luminousrebirth.com`):

1. In NameCheap, go to **Domain List > Manage > Advanced DNS**
2. Click **Change DNS Type** and select **Namecheap BasicDNS**
3. Add/update the following records:

| Type    | Name  | Value                           |
|---------|-------|---------------------------------|
| CNAME   | `book`| `cdn1.wixdns.net`               |

Keep any existing TXT records needed for email (SPF/DKIM). Remove old Wix A/CNAME records for `@` and `www`.

Wait for DNS propagation. This can take anywhere from a few minutes to 48 hours.

### Step 3: Verify the Wix Site on the Subdomain

1. Open a browser and navigate to `https://book.luminousrebirth.com`
2. Confirm the Wix site loads correctly
3. Test a booking calendar link, e.g.:
   ```
   https://book.luminousrebirth.com/booking-calendar/craniosacral-session-glastonbury-1
   ```
4. Ensure the booking flow works end-to-end

### Step 4: Update Booking URLs in the Codebase

Once the subdomain is live and verified, update `src/data/site-data.ts` to replace:

```
https://www.luminousrebirth.com/booking-calendar/...
```

with:

```
https://book.luminousrebirth.com/booking-calendar/...
```

Then commit and push the changes.

### Step 5: Point the Main Domain to Vercel

After confirming bookings work on the subdomain:

1. In NameCheap (**Advanced DNS**), add the following records:
   - `www` CNAME → `cname.vercel-dns.com`
   - `@` A record → *(use the IP shown in your Vercel Dashboard)*. At the time of writing, Vercel recommended `216.198.79.1` for this project.
2. In the [Vercel Dashboard](https://vercel.com/), go to your project → **Settings > Domains** and add `www.luminousrebirth.com`
3. Wait for DNS propagation and verify the new site loads at `www.luminousrebirth.com`

**Note:** If Vercel shows a different A record IP than the one listed above, always use the IP that Vercel recommends for your specific project.

### Step 6: Keep the Wix Subscription Active

Do not cancel the Wix subscription. The Wix site must remain published and the Bookings app active for clients to schedule appointments. You may downgrade to a cheaper Wix plan if it still supports the Bookings feature.

## Post-Migration Checklist

- [x] `book.luminousrebirth.com` loads the Wix site
- [x] All booking calendar links work on the subdomain
- [x] `www.luminousrebirth.com` loads the new Vercel site
- [x] Booking buttons on the new site link to the subdomain
- [x] Wix subscription remains active
- [ ] Test a full booking flow from the new site
