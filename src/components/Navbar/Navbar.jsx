import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { HiMiniXMark } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = (props) => {
  const [showNavlink, setShowNavlink] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); // Get current route

  // Toggle menu visibility
  const handleToggleMenu = () => {
    setShowNavlink(!showNavlink);
  };

  // Hide menu after clicking a link
  const handleLinkClick = () => {
    setShowNavlink(false);
  };

  // Handle window resize event to check if it's mobile or desktop
  const handleResize = () => {
    const isCurrentlyMobile = window.innerWidth < 768;
    setIsMobile(isCurrentlyMobile);

    // If resized to a larger screen, automatically hide the mobile menu
    if (!isCurrentlyMobile) {
      setShowNavlink(false);
    }
  };

  useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Automatically close the menu when the route changes
    handleLinkClick(); // Close menu on route change
  }, [location]);

  return (
    <nav className={`navbar ${showNavlink ? "active" : ""}`} style={{ maxWidth: props.width }}>
      {/* Show the menu or close icon for mobile devices */}
      {isMobile && (
        <>
          {!showNavlink ? (
            <SlMenu className="menubar" onClick={handleToggleMenu} />
          ) : (
            <HiMiniXMark className="menubar" onClick={handleToggleMenu} />
          )}
        </>
      )}

      <ul className={`navLinks ${showNavlink ? "show" : ""}`}>
        {/* Conditionally show "Home" link only if not on the "/" route */}
        {location.pathname !== "/" && (
          <li className={isMobile ? "w-full flex" : ""}>
            <NavLink to="/" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
              Home
            </NavLink>
          </li>
        )}
        <li className={isMobile ? "w-full flex" : ""}>
          <NavLink to="/about" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
            About
          </NavLink>
        </li>
        <li className={isMobile ? "w-full flex" : ""}>
          <NavLink to="/service" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
            Service
          </NavLink>
        </li>
        <li className={isMobile ? "w-full flex" : ""}>
          <NavLink to="/projects" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
            Projects
          </NavLink>
        </li>
        <li className={isMobile ? "w-full flex" : ""}>
          <NavLink to="/blogs" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
            Blogs
          </NavLink>
        </li>
        <li className={isMobile ? "w-full flex" : ""}>
          <NavLink to="/contact" onClick={handleLinkClick} className={isMobile ? "w-full nav" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
