import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='bg-dark sticky-bottom text-center p-5'>
      <p className='text-white footer-text'>Copyright &copy; {date} Capture-wild-nature.com</p>
    </div>
  );
};

export default Footer;