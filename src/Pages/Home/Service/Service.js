import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { id, img, name, description, price } = service;
  const navigate = useNavigate();
  
  const navigateProductDetails = (id) => {
    navigate(`/product/${id}`);
  }
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
        <button onClick={() => navigateProductDetails(id)}>Buy</button>
      </div>
    </div>
  );
};

export default Service;
