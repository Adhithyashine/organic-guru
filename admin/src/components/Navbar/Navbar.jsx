import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Remove token from local storage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='logo' src={assets.logo} alt="Logo" />
        <h1 className='navbar-heading'>Organic Guru Admin Panel</h1>
      </div>
      <button onClick={handleLogout} className='logout-button'>Logout</button>
    </div>
  );
};

export default Navbar;
