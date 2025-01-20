import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <h1 className='navbar-heading'>Organic Guru Admin Panel</h1>
    </div>
  );
};

export default Navbar;
