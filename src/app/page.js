import About from "~/sections/Home-2/About";
import Contact from "~/sections/Home-2/Contact";
import Counter from "~/sections/Home-2/Counter";
import FAQ from "~/sections/Home-2/FAQ";
import CustomHero from "~/sections/Home-2/Hero/CustomHero";
import Process from "~/sections/Home-2/Process";
import Service from "~/sections/Home-2/Service";
import Testimonial from "~/sections/Home-2/Testimonial";
import Video from "~/sections/Home-2/Video";
import Pricing from "~/sections/Home-2/Pricing";
import CustomFooter from "~/sections/Common/Footer/CustomFooter";
import CustomHeader from "~/sections/Common/Header/CustomHeader";

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
    <div style={{ overflow: 'hidden' }}>
      <CustomHeader />
      <CustomHero />
      <About />
      <Pricing />
      <FAQ />
      <CustomFooter />
    </div>
  );
}
