"use client";
import React from 'react';

const GoogleMapsEmbed = () => {
  // Google Maps embed URL with native business info card for 827 Broughton Street
  // Using place_id to ensure the business card appears
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dkeOFIQKRkdOlg&q=827+Broughton+Street+Victoria+BC&zoom=15&maptype=roadmap`;

  return (
    <div className="map-wrapper">
      <div className="map-container" style={{ width: '100%', height: '400px' }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="827 Broughton Street, Victoria - Geometry Integrated Health"
        ></iframe>
      </div>
    </div>
  );
};
        ></iframe >
      </div >
    </div >
  );
};

export default GoogleMapsEmbed;