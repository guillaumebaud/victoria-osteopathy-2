'use client';
import Link from "next/link";
import Image from "next/image";

const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="custom-footer-content">
          <div className="row">
            {/* Logo and Practice Info */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="custom-footer-logo">
                <Image src="/victoria-osteopathy/assets/footerlogo.png" alt="Victoria Osteopathy" width={150} height={50} />
              </div>
              <p className="custom-footer-text">
                Professional osteopathic care in Victoria, BC. Helping you achieve optimal health and wellness.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="custom-footer-title">Quick Links</h5>
              <ul className="custom-footer-links">
                <li><Link href="/about-us">About Michael</Link></li>
                <li><Link href="/about-osteopathy">About Osteopathy</Link></li>
                <li><Link href="/#pricing">Pricing</Link></li>
                <li><Link href="/book-appointment">Contact</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5 col-md-12">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-4">
                <div>
                  <h5 className="custom-footer-title">Contact Information</h5>
                  <div className="custom-footer-contact">
                    <div className="contact-item">
                      <span>905-933-8594</span>
                    </div>
                    <div className="contact-item">
                      <span>info@victoriaosteopathy.ca</span>
                    </div>
                    <div className="contact-item">
                      <span>Victoria, British Columbia</span>
                    </div>
                  </div>
                </div>

                {/* reCAPTCHA Badge */}
                <a
                  href="https://www.google.com/recaptcha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recaptcha-badge"
                >
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA"
                    width={32}
                    height={32}
                  />
                  <div className="recaptcha-badge-text">
                    <span>protected by</span>
                    <span><strong>reCAPTCHA</strong></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Copyright */}
        <div className="custom-footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p className="custom-copyright">© 2026 Victoria Osteopathy. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="custom-footer-note">
                Michael Dennis, Osteopathic Manual Practitioner
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;