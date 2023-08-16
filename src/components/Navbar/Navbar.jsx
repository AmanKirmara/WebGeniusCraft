// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={{ width: props.width }}>
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
