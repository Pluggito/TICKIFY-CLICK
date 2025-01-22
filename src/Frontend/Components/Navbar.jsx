import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/asset";
import { useAuth } from "../../Backend/Context/AuthContext";
import { signOut } from "../../Backend/Auth/Auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Backend/Auth/firebase";

const NAV_ITEMS = [
  { path: "/", label: "HOME" },
  { path: "/eventscategory", label: "DISCOVER" },
  { path: "/advert", label: "ADVERT" },
  { path: "/pricing", label: "PRICING" },
];

const Navbar = ({ isMobile, setIsMobile }) => {
  const [activeNav, setActiveNav] = useState(0);
  const indicatorRef = useRef(null);
  const location = useLocation();
  const { userLoggedIn, currentUser } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userInitials, setUserInitials] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  useEffect(() => {
    const getUserInitials = async () => {
      if (currentUser) {
        const userRef = doc(db, "Users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const firstInitial = userData.firstName ? userData.firstName[0].toUpperCase() : "";
          const lastInitial = userData.lastName ? userData.lastName[0].toUpperCase() : "";
          setUserInitials(`${firstInitial}${lastInitial}`);
        }
      }
    };

    getUserInitials();
  }, [currentUser]);

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
    const currentPath = location.pathname;
    const activeIndex = NAV_ITEMS.findIndex((item) => item.path === currentPath);
    if (activeIndex !== -1) {
      setActiveNav(activeIndex);
      updateIndicatorPosition(activeIndex);
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between py-4 px-5 relative ">
      {/* Logo Section */}
      {isMobile && userLoggedIn ? (
        <div className="w-2/3 sm:w-1/2 flex justify-between items-center">
          <div className="flex items-center gap-2" onClick={signOut}>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
              {userInitials || <FontAwesomeIcon icon={faUser} />}
            </div>
            <p className="text-sm text-gray-600">{userInitials ? userInitials : 'User'}</p>
          </div>
          <NavLink to="/" className="text-2xl font-bold">
            <p>TICKIFY</p>
          </NavLink>
        </div>
      ) : (
        <>
          <NavLink to="/" className="flex items-center gap-1 border border-green-800 text-xl font-bold ">
            <img src={assets.logo_img} className="w-10 inline-block" alt="Tickify Logo" />
            <span>TICKIFY</span>
          </NavLink>

          {/* Navigation Links */}
          <ul className="hidden sm:flex items-center gap-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`nav-item text-gray-700 transition-all duration-300 ${
                    activeNav === index ? "font-bold text-black" : "hover:text-black"
                  }`}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* User Options */}
          <div className="relative flex items-center gap-4">
            {userLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {userInitials || <FontAwesomeIcon icon={faUser} />}
                </div>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="flex flex-col py-2">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={signOut}>
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                name="login"
                className={`rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none font-space ${isMobile ? "hidden" : ""}`}
              >
                <NavLink to="/login" className="tracking-widest">Login</NavLink>
              </button>
            )}
          </div>
        </>
      )}
    </nav>
  );
};
export default Navbar;
