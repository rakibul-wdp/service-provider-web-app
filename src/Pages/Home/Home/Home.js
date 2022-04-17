import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Intro from '../Intro/Intro';
import Services from '../Services/Services';
import ShowUp from '../ShowUp/ShowUp';

const Home = () => {
  return (
    <div className='container'>
      <Intro/>
      <Services/>
      <ShowUp/>
      <Footer/>
    </div>
  );
};

export default Home;