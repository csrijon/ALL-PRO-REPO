import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import './Footer.css';

const BottomNav = () => {
  return (
    <footer className="bottom-footer">
      <div className="footer-item">
        <HomeIcon className="footer-icon" />
        <span className="footer-label">Home</span>
      </div>
      <div className="footer-item">
        <WorkIcon className="footer-icon" />
        <span className="footer-label">Projects</span>
      </div>
      <div className="footer-item">
        <CodeIcon className="footer-icon" />
        <span className="footer-label">Skills</span>
      </div>
      <div className="footer-item">
        <ContactMailIcon className="footer-icon" />
        <span className="footer-label">Contact</span>
      </div>
    </footer>
  );
};

export default BottomNav;
