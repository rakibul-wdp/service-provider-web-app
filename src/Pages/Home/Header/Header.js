import React from 'react';
import './Header.css';
import logo from '../../../images/header-logo.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <nav className='container'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <h2>Capture Wild Nature</h2>
      </div>
      <div className='nav-link'>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/services'>Services</CustomLink>
        <CustomLink to='/blogs'>Blogs</CustomLink>
        <CustomLink to='/aboutme'>About Me</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
