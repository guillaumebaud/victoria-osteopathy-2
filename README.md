# Victoria Osteopathy

Website for Victoria Osteopathy - a manual osteopathic treatment clinic in Victoria, BC.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Bootstrap 5, Material UI
- **Email:** [Resend](https://resend.com) Node SDK for transactional emails
- **Spam Protection:** Google reCAPTCHA v3 (server-side verification)
- **Hosting:** Vercel
- **Other:** Slick Carousel, Magnific Popup, Isotope Layout

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

This project requires environment variables for the contact form to work. Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_SECRET_KEY` | Resend API key for sending emails. Get it from [resend.com/api-keys](https://resend.com/api-keys) | Yes |
| `CONTACT_FORM_RECIPIENT_EMAIL` | Email address where contact form submissions are sent | Yes |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 site key (public). Get it from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin) | Yes |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key (private) | Yes |

**Note:** The `NEXT_PUBLIC_` prefix is required for the site key so Next.js exposes it to the browser.

### Vercel Setup

When deploying to Vercel, add these same variables in **Project Settings → Environment Variables**:
- Mark `RESEND_API_SECRET_KEY` and `RECAPTCHA_SECRET_KEY` as **Sensitive**
- You can set different `CONTACT_FORM_RECIPIENT_EMAIL` values for Production vs Preview environments

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build with CSS purging |
| `npm run build:no-purge` | Create production build without CSS purging |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without making changes |
| `npm run export` | Build static export for FTP hosting |

## Code Quality

This project uses **ESLint** for catching code issues and **Prettier** for consistent formatting.

### VS Code Setup (Recommended)

Install these extensions for the best experience:
1. **ESLint** (by Microsoft) - shows errors/warnings as you type
2. **Prettier** (by Prettier) - auto-formats on save

The `.vscode/settings.json` is already configured for format-on-save.

### Manual Usage

```bash
# Check for code issues
npm run lint

# Format all files
npm run format

# Check formatting without changing files
npm run format:check
```

## Project Structure

```
src/
├── app/
│   ├── _components/       # Shared components (Header, Footer)
│   ├── api/
│   │   └── contact/       # Contact form API route (POST)
│   ├── (home)/            # Home page sections (Hero, About, Pricing, FAQ)
│   ├── about-us/          # About Us page
│   ├── about-osteopathy/  # About Osteopathy page
│   ├── book-appointment/  # Booking page with clinic info & contact form
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── utils/
│   └── paths.js           # Path utilities
public/
├── main-assets/           # CSS, fonts, images for main site
├── victoria-osteopathy/   # Clinic-specific assets (logo, photos)
├── robots.txt             # Search engine crawling rules
└── sitemap.xml            # Sitemap for search engines
```

## Pages

- `/` - Home (hero, about section, pricing, FAQ)
- `/about-us` - About the clinic and testimonials
- `/about-osteopathy` - Information about osteopathic treatment
- `/book-appointment` - Clinic locations, maps, and contact form

## Contact Form

The contact form on the Book Appointment page uses a secure server-side flow:

1. User fills out the form (name, email, phone, message)
2. reCAPTCHA v3 generates a token in the browser
3. Form submits to `/api/contact` with the token
4. Server verifies the reCAPTCHA token with Google (rejects scores < 0.5)
5. Server sends notification email to the clinic via Resend
6. User sees success message in the dialog

**Security features:**
- reCAPTCHA verification happens server-side (secret key never exposed)
- Honeypot field to catch simple bots
- All API keys stored in environment variables

**Resend setup:**
- The `from` address uses `onboarding@resend.dev` for testing
- For production, [verify your domain](https://resend.com/docs/dashboard/domains/introduction) with Resend and update the `from` address in `src/app/api/contact/route.js`

## SEO

The site is optimized for search engines with the following features:

### Hosting Modes
- **Vercel (recommended):** Full functionality including API routes for the contact form
- **Static Export:** For FTP hosting, but contact form won't work (no server-side API)

### Meta Tags
- **Page-specific titles and descriptions** - Each page has unique metadata defined via Next.js `metadata` exports
- **Open Graph tags** - Proper previews when shared on Facebook, LinkedIn, etc.
- **Twitter cards** - Large image cards for Twitter/X sharing
- **Keywords and author** - Relevant keywords and authorship defined

### Schema.org Structured Data
JSON-LD structured data in `layout.js` includes:
- Business type (`HealthAndBeautyBusiness`)
- Both clinic locations with addresses
- Opening hours for each location
- Service types offered
- Practitioner information

### Sitemap & Robots
- `public/sitemap.xml` - Lists all pages with priorities and change frequencies
- `public/robots.txt` - Allows all crawlers, references sitemap

### Images
All images have descriptive `alt` attributes. Decorative images are marked with `aria-hidden="true"`.

### Updating SEO
- **Site URL:** Update `siteUrl` in `layout.js` and URLs in `sitemap.xml` if the domain changes
- **Page metadata:** Edit the `metadata` export at the top of each page file
- **Schema data:** Edit the `jsonLd` object in `layout.js`

## Deployment

### Vercel (Recommended)

This project is deployed on Vercel. Push to the `main` branch and Vercel will automatically build and deploy.

```bash
git push origin main
```

The build process includes PurgeCSS which automatically removes unused CSS, reducing the stylesheet size significantly.

### Static Export (FTP/Traditional Hosting)

For traditional hosting, you can export a static version:

```bash
npm run export
```

This creates an `out/` folder with static files configured for a `/victoria-osteopathy` subdirectory. Upload the contents to your web server.

**Note:** Static export does not support the API routes (contact form backend). Use Vercel for full functionality.
