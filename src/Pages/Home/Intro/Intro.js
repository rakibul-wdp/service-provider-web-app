import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro mt-5'>
      <div className='intro-detail'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='animate-charcter'>
                i am a professional <p>photographer</p>
              </h3>
            </div>
          </div>
        </div>
        <p className='intro-para'>
          Last three years i'm a professional wild life photographer. I'm capture huge photo of wild related. You get
          beautiful and awesome photo in this website. You can choose photo by your choose. Also I have best capture
          phot in this website.
        </p>
        <p className='intro-para'>
          In this world i'm visited many country for tourist and capture wild photo. Also you can hire me as a wild life
          photographer. I can bring professional photo for you. My photo capture capability is so good. You feel free to
          contact with me for hire for shotting photo. And also you buy photo in my website.
        </p>
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
