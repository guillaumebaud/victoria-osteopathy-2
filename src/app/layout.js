import Script from "next/script";
import "~/public/main-assets/css/fonts.css";
import ThemeProvider from "./_components/ThemeProvider";

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const siteUrl = "https://victoriaosteopathy.ca/victoria-osteopathy";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Victoria Osteopathy | Manual Osteopathic Treatment in Victoria, BC",
    template: "%s | Victoria Osteopathy",
  },
  description: "Professional osteopathic care in Victoria, BC. Manual therapy, pain management, sports injury treatment & holistic wellness with Michael Dennis. Book your appointment today.",
  keywords: ["osteopathy", "osteopath", "Victoria BC", "manual therapy", "pain management", "sports injury", "Michael Dennis", "holistic wellness", "back pain", "neck pain"],
  authors: [{ name: "Michael Dennis" }],
  creator: "Victoria Osteopathy",
  icons: {
    icon: [
      { rel: "icon", type: "image/x-icon", url: "/victoria-osteopathy/assets/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/victoria-osteopathy/assets/favicon.ico" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/victoria-osteopathy/assets/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Victoria Osteopathy",
    title: "Victoria Osteopathy | Manual Osteopathic Treatment in Victoria, BC",
    description: "Professional osteopathic care in Victoria, BC. Manual therapy, pain management, sports injury treatment & holistic wellness with Michael Dennis.",
    images: [
      {
        url: "/victoria-osteopathy/assets/prodslider.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Osteopathy - Professional Manual Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Osteopathy | Manual Osteopathic Treatment",
    description: "Professional osteopathic care in Victoria, BC with Michael Dennis.",
    images: ["/victoria-osteopathy/assets/prodslider.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://victoriaosteopathy.ca/victoria-osteopathy/#organization",
  name: "Victoria Osteopathy",
  description: "Professional osteopathic care in Victoria, BC. Manual therapy, pain management, sports injury treatment & holistic wellness.",
  url: "https://victoriaosteopathy.ca/victoria-osteopathy/",
  logo: "https://victoriaosteopathy.ca/victoria-osteopathy/assets/logo.jpg",
  image: "https://victoriaosteopathy.ca/victoria-osteopathy/assets/prodslider.jpg",
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Michael Dennis",
    jobTitle: "Osteopathic Manual Practitioner",
  },
  employee: {
    "@type": "Person",
    name: "Michael Dennis",
    jobTitle: "Osteopathic Manual Practitioner",
  },
  areaServed: {
    "@type": "City",
    name: "Victoria",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "British Columbia",
    },
  },
  serviceType: ["Osteopathy", "Manual Therapy", "Pain Management", "Sports Injury Treatment"],
  location: [
    {
      "@type": "Place",
      name: "Geometry Integrated Health",
      address: {
        "@type": "PostalAddress",
        streetAddress: "827 Broughton Street",
        addressLocality: "Victoria",
        addressRegion: "BC",
        addressCountry: "CA",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "14:30", closes: "20:45" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "14:30", closes: "20:45" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "14:30", closes: "20:45" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "14:15" },
      ],
    },
    {
      "@type": "Place",
      name: "Peninsula Physiotherapy Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9733 Fourth Street",
        addressLocality: "Sidney",
        addressRegion: "BC",
        addressCountry: "CA",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "13:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "13:00" },
      ],
    },
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload LCP hero image for faster discovery */}
        <link rel="preload" as="image" href="/victoria-osteopathy/assets/prodslider.jpg" fetchPriority="high" />
        {/* Font preconnects and loading - moved from CSS @imports to avoid request chains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
