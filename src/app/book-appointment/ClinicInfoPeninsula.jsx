"use client";
import React from 'react';
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";

const ClinicInfoPeninsula = () => {
  return (
    <div className="clinic-info-section">
      <h2 className="clinic-title">
        Peninsula Physiotherapy Clinic
        <br />
        <span className="clinic-subtitle">(Victoria Osteopathy Location)</span>
      </h2>

      <div className="clinic-description">
        <p>
          Victoria Osteopathy has partnered up with an amazing team of health care professionals at
          <strong> Peninsula Physiotherapy Clinic</strong>, and is currently working under their umbrella.
        </p>

        <p>
          You can find us at <strong>9733 Fourth Street, Sidney BC</strong>. Just remember when arriving for your appointment that you're looking for a clinic named <strong>Peninsula Physiotherapy</strong>.
        </p>
      </div>

      <div className="clinic-hours">
        <h3>Hours:</h3>
        <ul>
          <li><span>Tuesday:</span> <span>8am-1pm</span></li>
          <li><span>Wednesday:</span> <span>8am-1pm</span></li>
        </ul>
      </div>

      <div className="appointment-button-container">
        <Button
          component="a"
          href="https://peninsulaphysiotherapy.janeapp.com/locations/peninsula-physiotherapy/book#/staff_member/52"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          fullWidth
          endIcon={<ArrowOutwardIcon />}
        >
          Click here to book an appointment on the Peninsula Physiotherapy Clinic booking platform
        </Button>
      </div>

      <div className="clinic-note">
        <p>* For in-home treatments please contact us directly using the form below</p>
      </div>
    </div>
  );
};

export default ClinicInfoPeninsula;
