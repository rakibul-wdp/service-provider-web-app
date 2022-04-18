import React from 'react';
import profile from '../../images/profile.png';
import './About.css';

const About = () => {
  return (
    <div className='container d-flex justify-content-between  align-items-center'>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='animate-charcter'>
                full stack web-developer, software engineer, <p>problem solver</p>
              </h3>
            </div>
          </div>
        </div>
        <p>I want to be a full-stack Web-Developer, Software Engineer, and Problem solver. Basically I want to a good problem solver, develop web application and so on. I don't have any kind of goal like doing job omok and tomok company. But I have a goal that, I improve my skills day by day, learn everyday and also earn money to generate my skill value.</p>
        <p>Current time I'm learning web-development with a fantastic tutor. After few days I become a junior web developer. In two years (2022, 2023) I want to learning web technology and also doing job. Then 2024 year I decide to learn software engineering. For this goal I study everyday 10-12 hour. I'm so dedicated with it. Because discipline and practicing is key of learning.</p>
      </div>
      <div className='image-container'>
        <img src={profile} alt='' />
      </div>
    </div>
  );
};

export default About;