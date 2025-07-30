import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navleft">Srijon</div>
        <div className="navright">
          <label className="ui-switch">
            <input type="checkbox" />
            <div className="slider"></div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
