import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { id, img, name, description, price } = service;
  return (
    <div className='a-box'>
      <div className='img-container'>
        <div className='img-inner'>
          <div className='inner-skew'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      <div className='text-container'>
        <h3>{name}</h3>
        <p className='m-0'>Price: ${price}</p>
        <p><small>{description.slice(0, 50)}...</small></p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Service;
