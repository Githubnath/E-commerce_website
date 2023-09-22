import React from 'react';

function ContactUs() {
  const sendEmail = () => {
    window.location.href = 'mailto:sallybassey19@gmail.com';
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/Salome-bassey', '_blank');
  };
 
  const makePhoneCall = () => {
    window.location.href = 'tel:+2348157214006';
  };

  return (
    <div>
      <div className="contact-item" onClick={sendEmail}>
        <span>Email:</span>
        <a href="mailto:your@email.com">sallybassey19@gmail.com</a>
      </div>
      <div className="contact-item">
        <span>Address:</span>
        <span>3, Dede Close, Port Harcourt, Nigeria</span>
      </div>
      <div className="contact-item" onClick={makePhoneCall}>
        <span>Phone:</span>
        <a href="tel:+234-815721-4006">+1 (234) 803048-4399</a>
      </div>
      <div className="contact-item" onClick={openLinkedInProfile}>
        <span>LinkedIn:</span>
        <a href="#"> http://www.linkedin.com/in/salome-bassey</a>
      </div>
    </div>
  );
}

export default ContactUs;

