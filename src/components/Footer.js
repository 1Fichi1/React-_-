import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <h3>CONNECT WITH US</h3>
        <a href="https://www.youtube.com/channel/UCiBxZWamaDdlemljJ3aGPZQ" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://x.com/FunkoPOPsNews" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://play.google.com/store/apps/details?id=com.popspedia&hl=en_US&pli=1" target="_blank" rel="noopener noreferrer">Funko App</a>
      </div>
      <div className="copyright">
        &copy; 2024 Funko Shop
      </div>
    </footer>
  );
};

export default Footer;
