import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

import logoImage from "../images/MemoLaster.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={logoImage} alt="Logo" className="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/TakeaTest">Take a Test</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
