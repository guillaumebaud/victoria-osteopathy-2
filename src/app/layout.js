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
import "~/public/main-assets/css/fonts.css";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
