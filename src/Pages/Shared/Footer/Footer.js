import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='bg-dark'>
      <p className='text-white footer-text'>Copyright &copy; {date} Capture-wild-nature.com</p>
    </div>
  );
};

export default Footer;