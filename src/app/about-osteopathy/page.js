export const metadata = {
  title: "What is Osteopathy?",
  description: "Learn about osteopathy, a holistic approach to healthcare founded by Dr. Andrew Taylor Still. Discover how manual osteopathic treatment can help with pain, mobility, and overall wellness.",
  openGraph: {
    title: "What is Osteopathy? | Victoria Osteopathy",
    description: "Learn about osteopathy, a holistic approach to healthcare using manual therapy techniques.",
  },
};

import CustomHeader from "~/app/_components/CustomHeader";
import CustomFooter from "~/app/_components/CustomFooter";
import AboutOsteopathyContent from "./AboutOsteopathyContent";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function AboutOsteopathyPage() {
  return (
    <div className="page-wrapper">
      <CustomHeader />
      <main>
        <AboutOsteopathyContent />
      </main>
      <CustomFooter />
    </div>
  );
}