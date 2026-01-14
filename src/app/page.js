import About from "~/app/(home)/About";
import FAQ from "~/app/(home)/FAQ";
import CustomHero from "~/app/(home)/CustomHero";
import Pricing from "~/app/(home)/Pricing";
import CustomFooter from "~/app/_components/CustomFooter";
import CustomHeader from "~/app/_components/CustomHeader";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <CustomHeader />
      <CustomHero />
      <About />
      <Pricing />
      <FAQ />
      <CustomFooter />
    </div>
  );
}
