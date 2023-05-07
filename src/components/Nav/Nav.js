import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      <ul className="items">
        <li>
          <Link to="/">
            <img src="/images/nav/Logo.png" alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Artist</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <ul className="items">
        <li>
          <Link to="/">My Page</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/">Log-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
