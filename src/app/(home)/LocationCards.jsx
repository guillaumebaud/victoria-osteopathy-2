"use client";
import { useRef } from "react";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon, LocationOn as LocationIcon } from "@mui/icons-material";
import Image from "next/image";
import ContactFormSimple from "../book-appointment/ContactFormSimple";

const LocationCards = () => {
  const contactFormRef = useRef(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    contactFormRef.current?.openDialog();
  };

  return (
    <div id="locations" className="location-cards-area space">
      <div className="container">
        <div className="title-area text-center mb-5">
          <h2 className="sec-title">Our Locations</h2>
          <p className="sec-text">
            Victoria Osteopathy operates out of two convenient locations in the Greater Victoria area.
            Choose the clinic that works best for you.
          </p>
        </div>

        <div className="row gy-4 justify-content-center">
          {/* Geometry Integrated Health Card */}
          <div className="col-xl-6 col-lg-6">
            <div className="location-card h-100">
              <div className="location-card-header">
                <div className="location-icon">
                  <LocationIcon sx={{ fontSize: 40 }} />
                </div>
                <h3 className="location-card-title">Geometry Integrated Health</h3>
                <p className="location-card-subtitle">Downtown Victoria</p>
              </div>

              <div className="location-card-body">
                <div className="location-address mb-4">
                  <p className="mb-2">
                    <strong>827 Broughton Street</strong>
                    <br />
                    Victoria, BC
                  </p>
                  <p className="location-note">
                    Victoria Osteopathy has partnered with an amazing team of health care
                    professionals at Geometry Integrated Health. Look for the Geometry sign
                    when arriving for your appointment.
                  </p>
                </div>

                <div className="location-hours mb-4">
                  <h4 className="mb-3">Hours of Operation:</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Monday:</span>
                      <span className="time">2:30pm - 8:45pm</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Tuesday:</span>
                      <span className="time">2:30pm - 8:45pm</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Wednesday:</span>
                      <span className="time">2:30pm - 8:45pm</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Friday:</span>
                      <span className="time">8am - 2:15pm</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Sunday:</span>
                      <span className="time">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="location-card-actions">
                  <Button
                    component="a"
                    href="https://geometry.janeapp.com/#/staff_member/135"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<ArrowOutwardIcon />}
                    sx={{ mb: 2 }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=Geometry+Integrated+Health+827+Broughton+Street+Victoria+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    View on Map
                  </Button>
                </div>

                {/* JaneApp Branding */}
                <div className="janeapp-branding mt-4">
                  <div className="janeapp-info">
                    <Image
                      src="/victoria-osteopathy/assets/janeapp_logo.png"
                      alt="JaneApp Logo"
                      width={80}
                      height={24}
                      className="janeapp-logo"
                    />
                    <p className="janeapp-text">
                      This establishment uses JaneApp for online booking.
                    </p>
                  </div>
                  <p className="janeapp-help">
                    Not familiar with JaneApp?{" "}
                    <a href="#" onClick={handleContactClick} className="contact-link">
                      Contact us directly
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peninsula Physiotherapy Card */}
          <div className="col-xl-6 col-lg-6">
            <div className="location-card h-100">
              <div className="location-card-header">
                <div className="location-icon">
                  <LocationIcon sx={{ fontSize: 40 }} />
                </div>
                <h3 className="location-card-title">Peninsula Physiotherapy Clinic</h3>
                <p className="location-card-subtitle">Sidney, BC</p>
              </div>

              <div className="location-card-body">
                <div className="location-address mb-4">
                  <p className="mb-2">
                    <strong>9733 Fourth Street</strong>
                    <br />
                    Sidney, BC
                  </p>
                  <p className="location-note">
                    Victoria Osteopathy has partnered with Peninsula Physiotherapy Clinic.
                    Look for the Peninsula Physiotherapy sign when arriving for your appointment.
                  </p>
                </div>

                <div className="location-hours mb-4">
                  <h4 className="mb-3">Hours of Operation:</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Tuesday:</span>
                      <span className="time">8am - 1pm</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Wednesday:</span>
                      <span className="time">8am - 1pm</span>
                    </div>
                  </div>
                  <p className="location-note mt-3">
                    <em>* For in-home treatments, please contact us directly</em>
                  </p>
                </div>

                <div className="location-card-actions">
                  <Button
                    component="a"
                    href="https://peninsulaphysiotherapy.janeapp.com/locations/peninsula-physiotherapy/book#/staff_member/52"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<ArrowOutwardIcon />}
                    sx={{ mb: 2 }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=Peninsula+Physiotherapy+Clinic+9733+Fourth+Street+Sidney+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    View on Map
                  </Button>
                </div>

                {/* JaneApp Branding */}
                <div className="janeapp-branding mt-4">
                  <div className="janeapp-info">
                    <Image
                      src="/victoria-osteopathy/assets/janeapp_logo.png"
                      alt="JaneApp Logo"
                      width={80}
                      height={24}
                      className="janeapp-logo"
                    />
                    <p className="janeapp-text">
                      This establishment uses JaneApp for online booking.
                    </p>
                  </div>
                  <p className="janeapp-help">
                    Not familiar with JaneApp?{" "}
                    <a href="#" onClick={handleContactClick} className="contact-link">
                      Contact us directly
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Contact Form Dialog */}
      <ContactFormSimple ref={contactFormRef} />
    </div>
  );
};

export default LocationCards;
