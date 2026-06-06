# Deployment Guide

Step-by-step instructions to deploy Luminous Rebirth to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is sufficient)
- Access to the `luminousrebirth.com` domain DNS

## Step 1: Push to GitHub

```bash
# Create a new private repo on GitHub, then:
cd /home/marco/Desktop/projects/websites/masami/luminous-rebirth
git remote add origin git@github.com:YOUR_USERNAME/luminous-rebirth.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select the `luminous-rebirth` repo
4. Vercel will auto-detect Next.js -- no configuration needed
5. Click "Deploy"

The site will be live at `luminous-rebirth.vercel.app` within ~60 seconds.

## Step 3: Add Custom Domain

1. In the Vercel dashboard, go to **Settings > Domains**
2. Add `www.luminousrebirth.com`
3. Add `luminousrebirth.com` (it will redirect to `www`)
4. Vercel will show you the DNS records to add

## Step 4: Update DNS

At your domain registrar (where you bought `luminousrebirth.com`):

### Option A: Using Vercel Nameservers (Recommended)
Change your nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

### Option B: Using CNAME/A Records
If you want to keep your current DNS provider:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `cname.vercel-dns.com` |
| A | `@` | `76.76.21.21` |

DNS propagation can take up to 48 hours but usually completes within a few hours.

## Step 5: SSL Certificate

Vercel automatically provisions an SSL certificate once DNS is verified. No manual action required.

## Step 6: Environment Variables

In the Vercel dashboard, go to **Settings > Environment Variables** and add:

```env
# Add these as you wire up the integrations
RESEND_API_KEY=
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
MAILCHIMP_SERVER=
NEXT_PUBLIC_GA_ID=
```

After adding variables, redeploy for them to take effect.

## Step 7: Verify Deployment

After DNS propagates:

1. Visit `https://www.luminousrebirth.com`
2. Check all pages load correctly
3. Test the contact form (will be simulated until API route is added)
4. Verify images load from Wix CDN
5. Check mobile responsiveness
6. Run a Lighthouse audit

## Automatic Deployments

Once connected, every push to `main` will automatically deploy to production. Pull requests will generate preview deployments with unique URLs.

## Rollback

If something breaks after a deploy:

1. Go to **Deployments** in the Vercel dashboard
2. Find the last working deployment
3. Click the three dots menu > **Promote to Production**

## Wix Migration Checklist

Before cancelling the Wix subscription:

- [ ] Verify the new site is live and working on Vercel
- [ ] Download all original images from Wix media library
- [ ] Export any client data from Wix Bookings
- [ ] Verify Wix booking links work correctly
- [ ] Update any external links pointing to the old Wix site
- [ ] Confirm all email addresses are updated
- [ ] Run a final test of all pages, forms, and links
- [ ] Cancel Wix subscription
