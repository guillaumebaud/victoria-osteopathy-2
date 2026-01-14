"use client";
import React from 'react';

const ClinicInfo = () => {
  return (
    <div className="clinic-info-section">
      <h2 className="clinic-title">
        Geometry Integrated Health
        <br />
        <span className="clinic-subtitle">(Victoria Osteopathy Location)</span>
      </h2>

      <div className="clinic-description">
        <p>
          Victoria Osteopathy has partnered up with an amazing team of health care professionals at
          <strong> GEOMETRY INTEGRATED HEALTH</strong>, and is currently working under their umbrella.
        </p>

        <p>
          You can find us downtown at <strong>827 Broughton Street</strong>. Just remember when arriving for your appointment that you're looking for a sign that says <strong>Geometry Integrated Health</strong>.
        </p>
      </div>

      <div className="clinic-hours">
        <h3>Hours:</h3>
        <ul>
          <li><span>Monday:</span> <span>2:30pm-8:45pm</span></li>
          <li><span>Tuesday:</span> <span>2:30pm-8:45pm</span></li>
          <li><span>Wednesday:</span> <span>2:30pm-8:45pm</span></li>
          <li><span>Friday:</span> <span>8am-2:15pm</span></li>
          <li><span>Sunday:</span> <span>Closed</span></li>
        </ul>
      </div>

      <div className="appointment-button-container">
        <a
          href="https://geometry.janeapp.com/#/staff_member/135"
          target="_blank"
          rel="noopener noreferrer"
          className="book-appointment-btn"
        >
          Click here to book an appointment on the Geometry Integrated Health booking platform
        </a>
      </div>
    </div>
  );
};

export default ClinicInfo;