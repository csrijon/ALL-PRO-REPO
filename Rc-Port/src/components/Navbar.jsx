import { React, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import logopng from '../assets/Logo.png'
import './Navbar.css';

const Navbar = () => {
  const [darkmode, setdarkmode] = useState(false);
  const handeltoggle = () => {
    setdarkmode(!darkmode)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navleft"><img src={logopng} alt=""/></div>
        <div className="navright">
          <label className="ui-switch">
            <input type="checkbox" onChange={handeltoggle} />
            <div className='slider' >{darkmode ? <DarkModeIcon className='dark' /> : <LightModeIcon className='Light' />}</div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
