import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  const Option = ({ text, setActive }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setActive(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </motion.li>
    );
  };

  const DropdownMenu = ({ isActive, setIsActive, title, items }) => {
    return (
      <div className="relative">
        <b
          onClick={() => setIsActive((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:text-[#b30d0d] transition-colors"
        >
          <span className="font-medium text-sm">{title}</span>
          <motion.span variants={iconVariants}>
            <FontAwesomeIcon icon={faCaretDown} />
          </motion.span>
        </b>

        <motion.ul
          initial={wrapperVariants.closed}
          animate={isActive ? "open" : "closed"}
          variants={wrapperVariants}
          className="flex flex-col gap-2 p-2 mt-2 bg-white rounded-lg shadow-xl absolute top-full left-0 w-48"
        >
          {items.map((item, index) => (
            <Option key={index} text={item} setActive={setIsActive} />
          ))}
        </motion.ul>
      </div>
    );
  };

  const wrapperVariants = {
    open: { scaleY: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
    closed: { scaleY: 0, transition: { when: "afterChildren", staggerChildren: 0.1 } },
  };

  const iconVariants = { open: { rotate: 180 }, closed: { rotate: 0 } };

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
    closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
  };

  return (
    <footer className="py-10">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto px-4 bg-gray-100 py-20 mb-10">
        {/* Logo Section */}
        <div className="mb-8 md:mb-0 w-1/2">
          <p className="text-gray-700 font-bold text-lg">TICKIFY</p>
          <p className="leading-relaxed w-1/2">Tickify is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives.</p>
        </div>

        {/* Dropdowns Section */}
        <div className="flex space-x-4 mb-8 md:mb-0">
          <DropdownMenu
            isActive={active1}
            setIsActive={setActive1}
            title="PLAN EVENTS"
            items={["Create and Set Up", "Sell Tickets", "Online RSVP", "Online Event"]}
          />
          <DropdownMenu
            isActive={active}
            setIsActive={setActive}
            title="TICKIFY"
            items={["About Us", "Help Center", "Online RSVP", "Online Events"]}
          />
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <p className="text-gray-700 font-semibold mb-2">GET IN TOUCH</p>
          <div className="flex space-x-4 justify-center md:justify-end flex-col ">
            <a href="https://www.instagram.com/tickify.click" className="text-gray-700 hover:text-gray-900 transition-transform">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <span className="ml-1">tickify.click</span>
            </a>
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-transform">
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-transform">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        <div className="ml-10">
          Hello
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-300 my-6" />
      <div className="text-center text-sm text-gray-600">
        Copyright © 2024. Tickify, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
