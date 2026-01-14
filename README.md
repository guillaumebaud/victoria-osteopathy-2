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
| `npm run build` | Create production build |
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
├── landing-assets/        # Landing page assets
└── victoria-osteopathy/   # Clinic-specific assets
```

## Pages

- `/` - Home (hero, about section, pricing, FAQ)
- `/about-us` - About the clinic and testimonials
- `/about-osteopathy` - Information about osteopathic treatment
- `/book-appointment` - Clinic locations, maps, and contact form

## Deployment

This project is configured for static export. Running the build command generates a fully static site:

```bash
npm run build
```

This creates an `out/` folder containing all the static HTML, CSS, JS, and assets. Upload the contents of this folder to any web server or static hosting service.

**Note:** The site is configured with a base path of `/victoria-osteopathy`, so it expects to be served from that subdirectory (e.g., `https://yourdomain.com/victoria-osteopathy/`).
