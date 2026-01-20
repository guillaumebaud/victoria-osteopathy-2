export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Victoria Osteopathy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Victoria Osteopathy",
    description: "Privacy Policy for Victoria Osteopathy. Learn how we collect, use, and protect your personal information.",
  },
};

import CustomHeader from "~/app/_components/CustomHeader";
import CustomFooter from "~/app/_components/CustomFooter";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper">
      <CustomHeader />
      <main>
        {/* Hero Section */}
      <div className="about-us-hero space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title mb-4">Privacy Policy</h1>
              <p className="hero-subtitle">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="privacy-policy-section space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="policy-content">
                <p className="policy-date"><strong>Last updated:</strong> January 2026</p>

                <h2>Overview</h2>
                <p>
                  Victoria Osteopathy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
                </p>

                <h2>Information We Collect</h2>

                <h3>Contact Form Submissions</h3>
                <p>
                  When you submit our contact form, we collect the following information:
                </p>
                <ul>
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Your message</li>
                </ul>
                <p>
                  This information is processed through Formspree, a secure third-party form service. Formspree stores your submission temporarily to deliver it to us and provide spam protection. You can review Formspree's privacy practices at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a>.
                </p>

                <h3>Analytics Data</h3>
                <p>
                  We use Google Analytics to understand how visitors use our website. Google Analytics collects anonymous information including:
                </p>
                <ul>
                  <li>Pages visited and time spent on site</li>
                  <li>General geographic location (city/region level)</li>
                  <li>Device type and browser information</li>
                  <li>How you arrived at our website</li>
                </ul>
                <p>
                  This data is aggregated and anonymous—we cannot identify individual visitors. Google Analytics uses cookies to collect this information. You can learn more about Google's privacy practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
                </p>

                <h3>Spam Protection</h3>
                <p>
                  Our contact form uses Google reCAPTCHA to protect against spam and abuse. reCAPTCHA collects hardware and software information to verify that you are human. This data is processed by Google in accordance with their privacy policy.
                </p>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and messages</li>
                  <li>Schedule and manage appointments</li>
                  <li>Improve our website and services</li>
                  <li>Protect against spam and fraudulent submissions</li>
                </ul>

                <h2>What We Do NOT Do</h2>
                <p>We want to be clear about what we will never do with your information:</p>
                <ul>
                  <li>We do <strong>not</strong> sell your personal information to third parties</li>
                  <li>We do <strong>not</strong> use your information for advertising purposes</li>
                  <li>We do <strong>not</strong> share your information with marketers</li>
                  <li>We do <strong>not</strong> send unsolicited marketing emails</li>
                  <li>We do <strong>not</strong> send newsletters</li>
                </ul>

                <h2>Data Retention</h2>
                <p>
                  Contact form submissions are retained only as long as necessary to respond to your inquiry and for reasonable record-keeping purposes. Analytics data is retained in aggregate form as configured in our Google Analytics settings.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of analytics tracking by using browser privacy settings or tools like <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                </ul>

                <h2>Third-Party Services</h2>
                <p>Our website uses the following third-party services:</p>
                <ul>
                  <li><strong>Formspree</strong> - Contact form processing</li>
                  <li><strong>Google Analytics</strong> - Website analytics</li>
                  <li><strong>Google reCAPTCHA</strong> - Spam protection</li>
                  <li><strong>Jane App</strong> - Appointment booking (when you click our booking links)</li>
                </ul>
                <p>
                  Each of these services has their own privacy policies governing their use of your data.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> info@victoriaosteopathy.ca</li>
                  <li><strong>Phone:</strong> 905-933-8594</li>
                </ul>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      </main>
      <CustomFooter />
    </div>
  );
}
