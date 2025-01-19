import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/asset";

const NAV_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/eventscategory', label: 'DISCOVER' },
  { path: '/advert', label: 'ADVERT' },
  { path: '/pricing', label: 'PRICING' }
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(0);
  const indicatorRef = useRef(null);
  const location = useLocation();

  const handleNavClick = (index) => {
    setActiveNav(index);
    updateIndicatorPosition(index);
  };

  const updateIndicatorPosition = (index) => {
    const navItems = document.querySelectorAll(".nav-item");
    const selectedItem = navItems[index];
    if (selectedItem && indicatorRef.current) {
      const itemOffset = selectedItem.offsetLeft;
      const itemWidth = selectedItem.offsetWidth;
      indicatorRef.current.style.left = `${itemOffset + itemWidth / 2 - 6}px`;
    }
  };

  useEffect(() => {
    // Set active nav based on current path
    const currentPath = location.pathname;
    const activeIndex = NAV_ITEMS.findIndex((item) => item.path === currentPath);
    if (activeIndex !== -1) {
      setActiveNav(activeIndex);
      updateIndicatorPosition(activeIndex);
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between py-5 font-medium relative overflow-hidden m-auto">
      {/* Logo */}
      <div  className="">
        <NavLink to="/" className="text-2xl font-bold flex items-center justify-center flex-row">
          <img src={assets.logo_img} className="w-20 inline-block" alt="Tickify Logo" />
          <p className="-ml-[15px]">TICKIFY</p>
        </NavLink>
      </div>

      {/* Navigation Items */}
      <ul className="flex-row justify-center gap-4 mr-4 bg-transparent sm:flex hidden relative">
        <li className="flex flex-row gap-6 items-center justify-around py-1 rounded-lg relative">
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item text-gray-700 cursor-pointer transition-all duration-300 ${
                activeNav === index ? "font-bold" : "hover:text-black"
              }`}
              onClick={() => handleNavClick(index)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Indicator */}
          <FontAwesomeIcon
            icon={faCircle}
            ref={indicatorRef}
            className="absolute text-black transition-all duration-300 ease-in-out text-[9px] -bottom-1"
          />
        </li>

        {/* Login Button */}
        <button name="login" className="rounded-2xl border-2  border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none font-space">
          <NavLink to="/login" className='tracking-widest '>Login</NavLink>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
