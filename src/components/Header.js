import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="photo">
          <img src="Avjot_photo.jpg" alt="Avjot Singh Chawla" />
        </div>
        <div className="header-info">
          <h1>Avjot Singh Chawla</h1>
          <p>Ambitious Programmer | Python | Java</p>
          <div className="contact-info">
            <a href="mailto:avjot.s.chawla@gmail.com">avjot.s.chawla@gmail.com</a>
            <span>|</span>
            <a href="tel:+918424956985">+91 8424956985</a>
          </div>
          <div className="location">
            <p>Navi Mumbai, Maharashtra</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/Avjot-Chawla" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/avjot-singh-chawla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
