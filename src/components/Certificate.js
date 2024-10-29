import React from 'react';
import certificateTemplate from '../assets/certificate-template.png'; // Import the certificate image

const Certificate = ({ name, description, certificateId, date }) => {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US') : new Date().toLocaleDateString('en-US');
  return (
    <div className="certificate" id="certificate" style={certificateStyles}>
      <img
        src={certificateTemplate}
        alt="Certificate Template"
        style={imageStyle}
      />
      <div style={nameStyle}>{name || "Recipient's Name"}</div>
      <div style={descriptionStyle}>{description || "Certificate description"}</div>
      <div style={certIdStyle}>{certificateId || "Certificate ID"}</div>
      <div style={dateStyle}>{formattedDate}</div>
    </div>
  );
};

// Certificate styling and positioning
const certificateStyles = {
  position: 'relative',
  width: '1000px',   // Adjust width based on your certificate image size
  height: '700px',   // Adjust height based on your certificate image size
  marginTop: '30px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
};

const nameStyle = {
  position: 'absolute',
  top: '300.83px',   
  left: '77.15px',  
  width: '830px',
  height: '43px',
  color: 'black',
  fontSize: '42.6px',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 700,
  wordWrap: 'break-word',
  textTransform: 'uppercase',  
};

const descriptionStyle = {
  position: 'absolute',
  top: '370.21px',  
  left: '77.15px',
  width: '650.16px',
  height: '15px',
  color: 'black',
  fontSize: '16px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  wordWrap: 'break-word',
};

const certIdStyle = {
  position: 'absolute',
  top: '610.83px',   
  left: '817.15px',
  width: '91px',
  height: '14px',
  color: 'black',
  fontSize: '11.9px',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 800,
  wordWrap: 'break-word',
};

const dateStyle = {
  position: 'absolute',
  top: '630.83px',   
  left: '817.15px',
  width: '91px',
  height: '14px',
  color: 'black',
  fontSize: '11.9px',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 800,
  wordWrap: 'break-word',
};

export default Certificate;
