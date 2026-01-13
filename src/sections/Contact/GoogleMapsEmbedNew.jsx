"use client";
import React from 'react';

const GoogleMapsEmbed = () => {
  // Using the exact Place ID for Geometry Integrated Health from the Google Maps URL
  // This should display the native Google business info card
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.8!2d-123.3615157!3d48.4232498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f75cf0efe7f0b%3A0xfbaea7cd7baf869!2sGeometry%20Integrated%20Health!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca`;

  return (
    <div className="map-wrapper">
      <div className="map-container" style={{ width: '100%', height: '450px' }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Geometry Integrated Health - 827 Broughton Street, Victoria"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapsEmbed;