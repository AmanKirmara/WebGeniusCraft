import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import logoImage from "../../assets/images/webgeniuslogo.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const location = useLocation(); // Track the current route
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false); // Hide menu when navigation is clicked
  };

  const handelLogo = () => {
    navigate("/"); // Use navigate instead of window.location.href
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isHeaderFixed ? styles.fixed : ""}`}>
      <img
        className={styles.logo}
        src={logoImage}
        onClick={handelLogo}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        alt="My Logo"
      />

      {/* Pass isMenuOpen and handleNavigationClick to Navbar */}
      <Navbar
        width="40%"
        isMenuOpen={isMenuOpen}
        onLinkClick={handleNavigationClick}
        showHomeLink={location.pathname !== "/"} // Show Home if not on the root route
      />
    </header>
  );
};

export default Header;
