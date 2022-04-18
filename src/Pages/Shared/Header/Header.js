import React from 'react';
import './Header.css';
import logo from '../../../images/header-logo.png';
import CustomLink from '../../Home/CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className='header-container sticky-top'>
      <nav className='container header-nav'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
          <h2 className='header-heading'>Capture Wild Nature</h2>
        </div>
        <div className='nav-link'>
          <CustomLink to='/home'>Home</CustomLink>
          <CustomLink to='/services'>Services</CustomLink>
          <CustomLink to='/blogs'>Blogs</CustomLink>
          <CustomLink to='/about'>About Me</CustomLink>
          {user ? (
            <button className=' header-sign-out-btn text-decoration-none' onClick={handleSignOut}>
              sign out
            </button>
          ) : (
            <CustomLink to='/login'>Login</CustomLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
