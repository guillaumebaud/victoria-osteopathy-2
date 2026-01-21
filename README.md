# Victoria Osteopathy

Website for Victoria Osteopathy - a manual osteopathic treatment clinic in Victoria, BC.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Bootstrap 5, Material UI
- **Contact Form:** Resend + Google reCAPTCHA v3
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

## Project Structure

```
src/
├── app/
│   ├── _components/       # Shared components (Header, Footer)
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

## SEO

The site is optimized for search engines with the following features:

### Static Export
Built as a fully static site (`output: 'export'`) for fast load times and better SEO performance. No server-side rendering required.

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
