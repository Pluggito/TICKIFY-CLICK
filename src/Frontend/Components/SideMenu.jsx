import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export const SideMenu = ({ menu, setMenu }) => {
  const [active, setActive] = useState(false);

  const handleRequest = () => {
    setActive((pv) => !pv);
    setMenu((prev) => !prev);
  };

  return (
    <div className="place-content-center bg-inherit sm:hidden right-3 top-7 absolute">
      <AnimatedHamburgerButton active={active} handleRequest={handleRequest} />

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${menu ? 'w-full h-full' : 'w-0'}`}>
        <div onClick={() => setMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <div className='flex flex-col text-white'>
            <p>Back</p>
          </div>
        </div>
        <div className="flex flex-col text-white p-4">
          <a href="/" className="py-2 hover:bg-gray-700">Home</a>
          <a href="/about" className="py-2 hover:bg-gray-700">About</a>
          <a href="/pricing" className="py-2 hover:bg-gray-700">Pricing</a>
          <a href="/contact" className="py-2 hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </div>
  );
};

const AnimatedHamburgerButton = ({ active, handleRequest }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={handleRequest}
        className="relative h-12 w-12 rounded-full bg-white/0 transition-colors hover:bg-white"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 5px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 5px)",
    },
  },
};