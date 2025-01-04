{/*import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../Context/ThemeModes";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ThemeModes = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className= "grid h-[200px] place-content-center px-4 transition-color"
    >
      <SliderToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

const SliderToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full border py-1 px-2">
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => toggleTheme()}
      >
        <FontAwesomeIcon icon={faSun} className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10"></span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => toggleTheme()}
      >
        <FontAwesomeIcon icon={faMoon} className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10"></span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-black to-[#b30d0d]"
        />
      </div>
    </div>
  );
};

export default ThemeModes; */}