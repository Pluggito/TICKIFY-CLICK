import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/asset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';



export default function Home() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const newColor = window.scrollY > 5 ? 'grey' : 'black';
      setColor(newColor);
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const welcomeTextArray = "Welcome to".split('');
  const titleTextArray = "Tickify".split('');

  return (
    <section
      className="w-full h-screen relative  flex flex-col md:flex-row perspective-[100px] gap-9"
    >
      {/* Left Content */}
      <div className=" sm:w-1/4 md:w-1/2 relative text-center md:text-left flex flex-col justify-center items-center md:items-start ml-7 p-8 ">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-base font-space"
        >
          {welcomeTextArray.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-[60px] md:text-[100px] font-[Poppins]"
        >
          {titleTextArray.map((letter, index) => (
            <span key={index} style={{ color: color }}>
              {letter}
            </span>
          ))}
        </motion.h2>
        <button
          onClick={() =>
            document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' })
          }
          className="mt-4 flex items-center gap-2 border-black border-y-4 rounded-full py-3 px-6 font-semibold font-space text-gray-900 hover:bg-black hover:text-white transition-all duration-300"
        >
          <FontAwesomeIcon icon={faCircleRight} />
          GET STARTED
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center perspective-[100px]">
        <motion.img
          initial={{ rotateY: -15 }}
          animate={{ rotateY: -15 }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 0,
            transition: { duration: 0.4 }
          }}
          className="w-3/4 md:w-full object-contain transform-gpu transition-all duration-300"
          src={assets.bg1}
          alt="Background decoration"
        />
      </div>
    </section>
  );
}
