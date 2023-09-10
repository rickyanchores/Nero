import React from 'react';
import Card from '../../Components/Card/Card';

const About = () => {
  return (
    <div className='About bg-white text-black p-5'>
      <h1 className='text-5xl text-center'>About</h1>
     <div className="container flex justify-center items-center p-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default About;
