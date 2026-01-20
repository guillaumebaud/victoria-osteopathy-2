export const metadata = {
  title: "About Michael Dennis",
  description: "Meet Michael Dennis, Osteopathic Manual Practitioner in Victoria, BC. Learn about his training, approach to treatment, and commitment to helping patients achieve optimal health.",
  openGraph: {
    title: "About Michael Dennis | Victoria Osteopathy",
    description: "Meet Michael Dennis, Osteopathic Manual Practitioner in Victoria, BC.",
  },
};

import CustomHeader from "~/app/_components/CustomHeader";
import CustomFooter from "~/app/_components/CustomFooter";
import AboutDetailed from "./AboutDetailed";
import TestimonialSection from "./TestimonialSection";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <CustomHeader />
      <main>
        <AboutDetailed />
        <TestimonialSection />
      </main>
      <CustomFooter />
    </div>
  );
}
