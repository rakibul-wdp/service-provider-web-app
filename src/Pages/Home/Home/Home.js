import React from 'react';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import ShowUp from '../ShowUp/ShowUp';

const Home = () => {
  return (
    <div className='container'>
      <Intro/>
      <Services/>
      <ShowUp/>
    </div>
  );
};

export default Home;