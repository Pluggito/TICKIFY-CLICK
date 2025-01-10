import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/asset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

// Debounce function for scroll event
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const Home = ({ menu }) => {
  const [color, setColor] = useState('black');

  // Optimized debounce handling using useCallback
  const debouncedHandleScroll = useCallback(
    debounce(() => {
      const newColor = window.scrollY > 5 ? 'grey' : 'black';
      setColor(newColor);
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  const welcomeTextArray = "Welcome to".split('');
  const titleTextArray = "Tickify".split('');

  return (
    <div className="overflow-x-hidden mb-4 m-auto">
      <section
        aria-label="Welcome Section"
        className={`relative flex flex-col md:flex-row gap-9 transition-all duration-300  w-full mx-auto px-8 ${
          menu ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } hover:shadow-xl rounded-2xl`}
      >
        {/* Left Content */}
        <div className=" sm:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start p-8">
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-[30px] font-space text-gray-700 tracking-wide"
          >
            {welcomeTextArray.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-[70px] md:text-[100px] font-[Poppins] tracking-wide"
          >
            {titleTextArray.map((letter, index) => (
              <span key={index} className="text-transition" style={{ color: color }}>
                {letter}
              </span>
            ))}
          </motion.h2>
          <p className='font-space text-lg font-semibold text-gray-700 tracking-wide'>Find and book tickets for the hottest concerts, sports games, and shows near you.</p>
          <NavLink to="/signup">
            <button
              onClick={() =>
                document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-4 flex items-center gap-2 border-black border-y-4 rounded-full py-3 px-5 font-semibold font-space text-gray-900 hover:bg-black hover:text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faCircleRight} className="mr-2 tracking-widest" />
              GET STARTED
            </button>
          </NavLink>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-xl shadow-lg opacity-85 clip-circle-center"
            src={assets.bg1}
            alt="Background image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
