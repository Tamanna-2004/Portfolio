import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto md:w-[60%]'>
      <ul className='list-none flex justify-evenly p-5'>
        <li className='hover:scale-105 transition-all duration-200 hover:text-purple-400 cursor-pointer'>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='hover:scale-105 transition-all duration-200 hover:text-purple-400 cursor-pointer'>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className='hover:scale-105 transition-all duration-200 hover:text-purple-400 cursor-pointer'>
          <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li className='hover:scale-105 transition-all duration-200 hover:text-purple-400 cursor-pointer'>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
