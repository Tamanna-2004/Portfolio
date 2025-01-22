import React from 'react';
import cat from '../assets/cute-cat-purple.gif';  // or the correct extension

const Home = () => {
  return (
    <section id='home'>
      <div className='w-[100%] mx-auto p-14 flex flex-col md:flex-row items-center md:w-[80%]'>
        {/* Text Section */}
        <div className='w-[100%] md:w-[50%] mb-10 md:mb-0 hero-div'>
          <div className='border p-3 mb-5 inline-block ml-1'>Welcome to My Portfolio</div>
          <h1 className='mb-5 text-3xl md:text-5xl font-bold text-purple-200  md:4xl'>
            Building the Future with Code – A Passionate Developer
          </h1>
          <p className='text-xs md:text-sm text-gray-400 w-[90%] md:w-[70%]'>
            I specialize in building dynamic and responsive web applications using modern technologies like React, Node.js, and Express. My goal is to create seamless user experiences and intuitive designs that leave a lasting impression.
          </p>
        </div>

        {/* Image Section */}
        <div className='w-[100%] md:w-[50%] flex justify-center'>
          <img 
            src={cat} 
            alt="cat" 
            className='rounded-3xl border shadow-xl shadow-purple-800 mix-blend-screen shadow-[4px_4px_12px_2px_rgba(128,0,128,0.5)]
            hover:scale-105 transition-all duration-300 avatar'
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
