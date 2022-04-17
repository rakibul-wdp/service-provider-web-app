import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div className='product-details'>
      <h2>Product Details Here {productId}</h2>
      <div>
        <img src='http://bit.ly/2tMBBTd' alt='' />
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
