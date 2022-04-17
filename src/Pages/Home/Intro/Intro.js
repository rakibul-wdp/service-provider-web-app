import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro mt-5'>
      <div className='intro-detail'>
        <h2>Something Typing</h2>
      </div>
      <div className='intro-carousel w-50'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://121clicks.com/wp-content/uploads/2012/04/wildlife_photographer_website_08.jpg'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://121clicks.com/wp-content/uploads/2012/04/wildlife_photographer_website_17.jpg'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://121clicks.com/wp-content/uploads/2012/04/wildlife_photographer_website_21.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Intro;
