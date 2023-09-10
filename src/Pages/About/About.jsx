import React from 'react';
import Card from '../../Components/Card/Card';

const About = () => {
  return (
    <div className='About bg-white'>
      <h3>About</h3>
      <div className="container flex justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default About;
