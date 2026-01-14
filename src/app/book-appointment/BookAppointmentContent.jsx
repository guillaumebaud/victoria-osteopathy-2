"use client";
import React, { useRef } from 'react';
import { Button } from "@mui/material";
import { Mail as MailIcon } from "@mui/icons-material";
import CustomHeader from '../_components/CustomHeader';
import GoogleMapsEmbedGeometry from './GoogleMapsEmbedGeometry';
import ClinicInfo from './ClinicInfo';
import GoogleMapsEmbedPeninsula from './GoogleMapsEmbedPeninsula';
import ClinicInfoPeninsula from './ClinicInfoPeninsula';
import ContactFormSimple from './ContactFormSimple';
import CustomFooter from '../_components/CustomFooter';

export default function BookAppointmentContent() {
  const contactFormRef = useRef(null);

  const handleContactClick = () => {
    contactFormRef.current?.openDialog();
  };

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
                Victoria Osteopathy operates out of two convenient locations in the Greater Victoria area. Choose the clinic that works best for you and book your appointment directly through their booking platform, or contact us directly and we'll help you get booked in.
              </p>
              <Button
                variant="contained"
                size="medium"
                onClick={handleContactClick}
                endIcon={<MailIcon />}
                sx={{ mt: 2 }}
              >
                Contact Us Directly
              </Button>
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
              <ContactFormSimple ref={contactFormRef} />
            </div>
          </div>
        </div>
      </section>

      <CustomFooter />
    </>
  );
}
