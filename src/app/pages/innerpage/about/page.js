import CustomHeader from "~/sections/Common/Header/CustomHeader";
import CustomFooter from "~/sections/Common/Footer/CustomFooter";
import AboutDetailed from "~/sections/About/AboutDetailed";
import TestimonialSection from "~/sections/About/TestimonialSection";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function AboutPage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <CustomHeader />
      <AboutDetailed />
      <TestimonialSection />
      <CustomFooter />
    </div>
  );
}
