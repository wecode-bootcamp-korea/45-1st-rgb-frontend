import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = link => {
    setActiveLink(link);
  };
  // const points = 10;
  return (
    <nav className="nav">
      <ul className="items">
        <li>
          <Link to="/">
            <img src="/images/nav/Logo.png" alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      <ul className="items">
        <li>
          <Link to="/mypage">My Page</Link>
          {/* <div>{points}</div> */}
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Log-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
