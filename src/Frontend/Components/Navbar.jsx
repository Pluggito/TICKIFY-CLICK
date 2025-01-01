import { faBars, faCircle, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useRef, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/eventcategory', label: 'DISCOVER' },
  { path: '/advert', label: 'ADVERT' },
  { path: '/pricing', label: 'PRICING' }
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(0);
  const indicatorRef = useRef(null);
  const [menu, setMenu] = useState(false);
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
    const activeIndex = NAV_ITEMS.findIndex(item => item.path === currentPath);
    if (activeIndex !== -1) {
      setActiveNav(activeIndex);
      updateIndicatorPosition(activeIndex);
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between py-5 font-medium bg-[rgb(240,238,235)]
            bg-[radial-gradient(rgba(0,0,0,0.02)_1px,rgba(0,0,0,0)_1px)] bg-[size:4px_4px]">
      <div className="ml-7">
        <NavLink to="/" className="text-xl font-bold">TICKIFY</NavLink>
      </div>

      <ul className="flex-row justify-between gap-6 mr-7 bg-transparent sm:flex hidden">
        <div className="relative flex flex-row gap-6 items-center justify-around w-1/2 py-1 rounded-lg">
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item text-gray-900 cursor-pointer transition-all duration-300 ${
                activeNav === index ? "font-bold" : "hover:text-gray-600"
              }`}
              onClick={() => handleNavClick(index)}
            >
              {item.label}
            </NavLink>
          ))}

          <FontAwesomeIcon 
            icon={faCircle} 
            ref={indicatorRef} 
            className="absolute text-black transition-all duration-300 ease-in-out text-[9px]  -bottom-1"
          />
        </div>

        <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none font-space">
          Login
        </button>
      </ul>

      <FontAwesomeIcon 
        icon={faBars} 
        className="text-[20px] w-5 cursor-pointer sm:hidden mr-7" 
        onClick={() => setMenu(true)}
      />

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${menu ? 'w-full h-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <FontAwesomeIcon icon={faAngleLeft} className='text-[20px] mt-[4px] mr-[-5px]' />
            <p>Back</p>
          </div>
          {NAV_ITEMS.map(item => (
            <NavLink 
              key={item.path}
              onClick={() => setMenu(false)} 
              to={item.path} 
              className='py-2 pl-6 border hover:bg-gray-50'
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
