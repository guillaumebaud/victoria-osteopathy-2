# EmailJS Setup Guide

## Overview
This guide will help you set up EmailJS to handle contact form submissions for Victoria Osteopathy website.

## Step 1: Create EmailJS Account
1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal/business Gmail)
   - **Outlook** (for Microsoft accounts)
   - **Yahoo** (for Yahoo accounts)
   - **Or other supported providers**
4. Connect your email account and authorize EmailJS
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
New contact form submission from Victoria Osteopathy website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent automatically from the Victoria Osteopathy contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Set the template settings:
   - **To Email:** michael@victoria-osteopathy.com (or Michael's actual email)
   - **From Name:** Victoria Osteopathy Contact Form
   - **Reply To:** {{from_email}}

5. Save and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** > **General** in your dashboard
2. Find your **Public Key** (e.g., `user_abcd1234efgh5678`)

## Step 5: Update Environment Variables
In your `.env.local` file, replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abcd1234efgh5678
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the test form
4. Check Michael's email inbox for the test message

## EmailJS Free Tier Limits
- 200 emails per month
- EmailJS branding in emails
- Basic templates only

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles rate limiting and spam protection
- Consider upgrading to paid plan for production use to remove EmailJS branding

## Alternative: Formspree Setup
If you prefer Formspree instead:
1. Go to [https://formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update the form action to point to Formspree endpoint
4. Much simpler but less customizable

## Troubleshooting
- **403 Forbidden:** Check your public key and service ID
- **Email not received:** Check spam folder, verify template settings
- **CORS errors:** Make sure you're using the browser SDK correctly

## Production Deployment
- Environment variables work with static builds
- No server-side configuration needed
- Works with any hosting provider (Netlify, Vercel, etc.)