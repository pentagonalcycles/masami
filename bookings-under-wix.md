# Keeping Wix Bookings on a Subdomain

This guide explains how to keep the existing Wix Bookings system running on a subdomain (e.g., `book.luminousrebirth.com`) while the main website is hosted on Vercel.

## Why This Is Needed

The new Next.js website is deployed on Vercel and will eventually replace the Wix site at `www.luminousrebirth.com`. However, Wix Bookings is still used for scheduling and payments. To prevent booking links from breaking, the Wix site must remain accessible on a dedicated subdomain.

## Step-by-Step Instructions

### Step 1: Connect the Subdomain in Wix

1. Log in to the [Wix Dashboard](https://www.wix.com/dashboard/)
2. Go to **Settings > Domains**
3. Click **Connect a domain you already own**
4. Enter `book.luminousrebirth.com`
5. Wix will display DNS records to add (usually a CNAME pointing to `www21.wixdns.net` or a similar Wix DNS target). Copy these values.

### Step 2: Add DNS Records

In your domain registrar or DNS provider (wherever you manage DNS for `luminousrebirth.com`), add the following record:

| Type  | Name  | Value                           |
|-------|-------|---------------------------------|
| CNAME | `book`| *(Paste the value from Wix)*    |

**Note:** Do not modify the existing `www` or root (`@`) records yet. Only add the `book` subdomain.

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

1. In your DNS provider, update the main domain records to point to Vercel:
   - `www` CNAME → `cname.vercel-dns.com`
   - `@` A record → `76.76.21.21`
2. In the [Vercel Dashboard](https://vercel.com/), add `www.luminousrebirth.com` as a custom domain
3. Wait for DNS propagation and verify the new site loads at `www.luminousrebirth.com`

### Step 6: Keep the Wix Subscription Active

Do not cancel the Wix subscription. The Wix site must remain published and the Bookings app active for clients to schedule appointments. You may downgrade to a cheaper Wix plan if it still supports the Bookings feature.

## Post-Migration Checklist

- [ ] `book.luminousrebirth.com` loads the Wix site
- [ ] All booking calendar links work on the subdomain
- [ ] `www.luminousrebirth.com` loads the new Vercel site
- [ ] Booking buttons on the new site link to the subdomain
- [ ] Wix subscription remains active
- [ ] Test a full booking flow from the new site
