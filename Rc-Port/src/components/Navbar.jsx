import {React,useState} from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Navbar.css';

const Navbar = () => {
   const [darkmode, setdarkmode ] = useState(false);
   const handeltoggle = () => {
     setdarkmode(!darkmode)
   }
  
  return (
    <div>
      <nav className="navbar">
        <div className="navleft">Srijon</div>
        <div className="navright">
          <label className="ui-switch">
            <input type="checkbox" onChange={handeltoggle} />
            <div className='slider' >{darkmode ? <DarkModeIcon/> : <LightModeIcon/> }</div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
