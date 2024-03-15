// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = (props) => {
  const [showNavlink, setShowNavlink] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const handleToggleMenu = () => {
    setShowNavlink(!showNavlink);
  };
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);


  return (
    <nav className={`navbar ${showNavlink ? "active" : ""}`} style={{ maxWidth: props.width }}>
      {windowWidth < 768 && (
        <>
          {!showNavlink ? (
            <SlMenu className="menubar" onClick={handleToggleMenu} />
          ) : (
            <HiMiniXMark className="menubar" onClick={handleToggleMenu} />
          )}
        </>
      )}

      <ul className="navLinks">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
