import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useRef, useEffect } from "react"
// import { NavLink } from "react-router-dom"


const Navbar = () => {
        const [activeNav, setActiveNav] = useState("home");
        const indicatorRef = useRef(null)


  const handleNavClick = (e, index) => {
    setActiveNav(index);

    const navItems = document.querySelectorAll(".nav-item");
    const selectedItem = navItems[index];

    // Get position of clicked nav item
    const itemOffset = selectedItem.offsetLeft;
    const itemWidth = selectedItem.offsetWidth;

    // Move the indicator
    indicatorRef.current.style.left = `${itemOffset + itemWidth / 2 - 6}px`;
  };

  useEffect(() => {
    // Set initial indicator position
    const navItems = document.querySelectorAll(".nav-item");
    const firstItem = navItems[0];
    const itemOffset = firstItem.offsetLeft;
    const itemWidth = firstItem.offsetWidth;
    indicatorRef.current.style.left = `${itemOffset + itemWidth / 2 - 6}px`;
    indicatorRef.current.style.top = "48px"; // Position below nav items
  }, []);

  return (
    <nav className="flex items-center justify-between py-5 font-medium  bg-[rgb(240,238,235)]
            bg-[radial-gradient(rgba(0,0,0,0.02)_1px,rgba(0,0,0,0)_1px)] bg-[size:4px_4px]">
        <div>

        </div>
        <ul className=" flex-row justify-between gap-6 mr-7 bg-transparent sm:flex hidden">
        <div className="relative flex flex-row gap-6 items-center justify-around w-1/2 py-1 rounded-lg s">
      {["home", "discover", "advert", "pricing"].map((item, index) => (
        <div 
          key={item}
          className={`nav-item text-gray-700 cursor-pointer ${
            activeNav === index ? "font-bold" : ""
          }`}
          onClick={(e) => handleNavClick(e, index)}
        >
          {item.toUpperCase()}
        </div>
      ))} 

      <FontAwesomeIcon icon={faCircle} ref={indicatorRef} className="absolute text-black transition-all duration-300 ease-in-out text-[9px]"/>

      </div>

      <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none font-space">
      Login
    </button>
        </ul>

      
      
    </nav>
  )
}

export default Navbar
