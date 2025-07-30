import React from 'react';
import './MainContent.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const MainContent = () => {
  return (
    <div className="main-content css-pe0g6j ">
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
          <button className="contact-btn">Contact Me</button>
          <button className="resume-btn">Get Resume ⬇</button>
        </div>
      </div>

      {/* <div className="right-section">
        <pre className="code-block">
{`const coder = {
  name: 'Srijon',
  skills: ['React', 'NextJS', 'Redux', 'Express',
           'NestJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
        </pre>
      </div> */}
    </div>
  );
};

export default MainContent;
