import React from 'react';
import backgroundImage from "../../Images/bg-image.avif"; // Replace with the actual path to your background image

const Home = () => {
  return (
    <div className='min-h-screen bg-black w-screen flex items-center justify-center bg-center bg bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className='text-5xl font-thin text-white'>Don't BI. Just Search</p>
    </div>
  );
}

export default Home;
