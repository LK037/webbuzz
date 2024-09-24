import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-green-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Welcome to XYZ Cricket Tournaments</h1>
      <p className="text-xl mt-4">Join the most thrilling cricket tournaments!</p>
      <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg">Register Now</button>
    </div>
  );
};

export default HeroSection;
