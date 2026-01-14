# Victoria Osteopathy

Website for Victoria Osteopathy - a manual osteopathic treatment clinic in Victoria, BC.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Bootstrap 5, Material UI
- **Contact Form:** EmailJS
- **Other:** Slick Carousel, Magnific Popup, Isotope Layout

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

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

This project is configured for static export. Running the build command generates a fully static site:

```bash
npm run build
```

This creates an `out/` folder containing all the static HTML, CSS, JS, and assets. Upload the contents of this folder to any web server or static hosting service.

The build process includes PurgeCSS which automatically removes unused CSS, reducing the stylesheet size by ~50%.

**Note:** The site is configured with a base path of `/victoria-osteopathy`, so it expects to be served from that subdirectory (e.g., `https://yourdomain.com/victoria-osteopathy/`).
