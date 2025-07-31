import React from 'react';
import './MainContent.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import image from '../assets/image 1.png'

const MainContent = () => {
  return (
    <div className="main-content css-pe0g6j ">
       <div className="right-section">
      <div className="image-section">
        <img src = {image} alt="" />
      </div>
      </div>
      <div className="left-section">
        <h1>
          This is <span className="highlight">Srijon</span>, I'm a<br />
          Professional <span className="highlight">Software Developer</span>.
        </h1>
        <div className="social-icons">
          <GitHubIcon className='git' />
          <LinkedInIcon/>
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
        </div>
        <div className="buttons">
          {/* <button className="contact-btn">Contact Me</button> */}
        <Button variant="contained">Click Me</Button>
          <button className="resume-btn">Get Resume ⬇</button>
        </div>
      </div>

     
    </div>
  );
};

export default MainContent;
