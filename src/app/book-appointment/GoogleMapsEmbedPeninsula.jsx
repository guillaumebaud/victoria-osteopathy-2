"use client";
import React from 'react';

const GoogleMapsEmbedPeninsula = () => {
  // Peninsula Physiotherapy Clinic - 9733 Fourth Street, Sidney BC
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5!2d-123.3989013!3d48.6473967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f662ae52ebf8f%3A0x79354c3ef8a2fc18!2sPeninsula%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca`;

  return (
    <div className="map-wrapper" style={{ height: '100%' }}>
      <div className="map-container" style={{ width: '100%', height: '100%' }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peninsula Physiotherapy Clinic - 9733 Fourth Street, Sidney BC"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapsEmbedPeninsula;
