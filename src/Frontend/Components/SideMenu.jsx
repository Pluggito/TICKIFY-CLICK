import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const SideMenu = ({ menu, setMenu }) => {
  const [active, setActive] = useState(false);

  const handleRequest = () => {
    setActive((prev) => !prev);
    setMenu((prev) => !prev);
  };

  // Close the menu when the menu state changes
  useEffect(() => {
    if (menu) {
      setActive(true); // Keep the hamburger button active when the menu is open
    } else {
      setActive(false); // Reset the hamburger button when the menu is closed
    }
  }, [menu]);

  return (
    <div className="place-content-center bg-inherit sm:hidden right-0 top-7 absolute">
      {/* Hamburger Button */}
      <AnimatedHamburgerButton
        active={active}
        handleRequest={handleRequest}
        className="z-50" // Ensures button stays above curtain menu
      />

      {/* Curtain Menu */}
      <div
  className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${
    menu
      ? "h-full opacity-100 pointer-events-auto z-50 bg-[#f0eeeb] bg-[radial-gradient(rgba(0,0,0,0.02)_1px,rgba(0,0,0,0)_1px)] bg-[length:4px_4px]"
      : "h-0 opacity-0 pointer-events-none z-0"
  }`}
>

        <div className="flex flex-col items-center justify-center h-full text-center font-space font-semibold ">
          <NavLink
            onClick={() => setMenu(false)} // Close the menu when clicked
            to="/"
            className="text-2xl sm:text-4xl py-4 hover:text-gray-300 transition-colors"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)} // Close the menu when clicked
            to="/eventscategory"
            className="text-2xl sm:text-4xl py-4 hover:text-gray-300 transition-colors"
          >
            DISCOVER
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)} // Close the menu when clicked
            to="/about"
            className="text-2xl sm:text-4xl py-4 hover:text-gray-300 transition-colors"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)} // Close the menu when clicked
            to="/contact"
            className="text-2xl sm:text-4xl py-4 hover:text-gray-300 transition-colors"
          >
            CONTACT
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)} // Close the menu when clicked
            to="/login"
            className="text-2xl sm:text-4xl py-4 hover:text-gray-300 transition-colors"
          >
            LOGIN
          </NavLink>
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
  className="relative h-12 w-12 rounded-full bg-transparent transition-colors hover:bg-gray-200 z-[100]"
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
