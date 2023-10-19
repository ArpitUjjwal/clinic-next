import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.117755178023!2d77.19391939999997!3d28.566226500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9711c9fa77%3A0x16da467f6e7ea82a!2sDERMAIIMS%20Skin%20and%20Hair%20Transplant%20Clinic!5e0!3m2!1sen!2sin!4v1697636427863!5m2!1sen!2sin"
          height="550"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
