import React from 'react';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div className='container'>
      <Intro/>
      <Services/>
    </div>
  );
};

export default Home;