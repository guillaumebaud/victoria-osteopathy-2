import React from 'react';
import CustomHeader from '../_components/CustomHeader';
import GoogleMapsEmbedGeometry from './GoogleMapsEmbedGeometry';
import ClinicInfo from './ClinicInfo';
import GoogleMapsEmbedPeninsula from './GoogleMapsEmbedPeninsula';
import ClinicInfoPeninsula from './ClinicInfoPeninsula';
import ContactFormSimple from './ContactFormSimple';
import CustomFooter from '../_components/CustomFooter';

// Import required CSS files
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function BookAppointment() {
  return (
    <>
      <CustomHeader />

      {/* Hero Section */}
      <div className="about-us-hero space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title mb-4">Book Appointment</h1>
              <p className="hero-subtitle">
                Schedule your osteopathic treatment with Michael Dennis in Victoria, BC. Experience professional manual therapy for optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="booking-content-section space">
        <div className="container">
          {/* First Location - Geometry Integrated Health */}
          <div className="row mb-5">
            {/* Left Column - Google Maps */}
            <div className="col-lg-6 mb-4">
              <GoogleMapsEmbedGeometry />
            </div>

            {/* Right Column - Clinic Info */}
            <div className="col-lg-6 mb-4">
              <ClinicInfo />
            </div>
          </div>

          {/* Separator */}
          <hr className="location-separator my-5" />

          {/* Second Location - Peninsula Physiotherapy Clinic */}
          <div className="row mb-5">
            {/* Left Column - Google Maps */}
            <div className="col-lg-6 mb-4">
              <GoogleMapsEmbedPeninsula />
            </div>

            {/* Right Column - Clinic Info */}
            <div className="col-lg-6 mb-4">
              <ClinicInfoPeninsula />
            </div>
          </div>

          {/* Contact Form Section - Full Width */}
          <div className="row">
            <div className="col-lg-12">
              <ContactFormSimple />
            </div>
          </div>
        </div>
      </section>

      <CustomFooter />
    </>
  );
}