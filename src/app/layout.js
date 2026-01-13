


export const metadata = {
  title: "Victoria Osteopathy | Professional Manual Osteopathic Treatment in Victoria, BC",
  description: "Professional osteopathic care in Victoria, BC. Manual therapy, pain management, sports injury treatment & holistic wellness. Book your appointment today.",
  icons: {
    icon: [
      { rel: "icon", type: "image/x-icon", url: "/victoria-osteopathy/assets/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/victoria-osteopathy/assets/favicon.ico" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/victoria-osteopathy/assets/favicon.ico" },
    ],
    shortcut: [
      { rel: "shortcut icon", url: "/victoria-osteopathy/assets/favicon.ico" },
    ],
  },
};
import "~/public/main-assets/css/fonts.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
