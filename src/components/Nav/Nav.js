import React, { useState } from "react";
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
          <a
            href="#main"
            className={activeLink === "main" ? "active" : ""}
            onClick={() => handleLinkClick("main")}
          >
            rgb.
          </a>
        </li>
        <li>
          <a
            href="Artists의 파일주소"
            className={activeLink === "Artists" ? "active" : ""}
            onClick={() => handleLinkClick("Artists")}
          >
            Artists
          </a>
        </li>
        <li>
          <a
            href="Shop의 파일주소"
            className={activeLink === "Shop" ? "active" : ""}
            onClick={() => handleLinkClick("Shop")}
          >
            Shop
          </a>
        </li>
      </ul>

      <ul className="items">
        <li>
          <a
            href="My Page의 파일주소"
            className={activeLink === "My page" ? "active" : ""}
            onClick={() => handleLinkClick("My page")}
          >
            My page
          </a>
        </li>
        <li>
          <a
            href="Cart의 파일주소"
            className={activeLink === "Cart" ? "active" : ""}
            onClick={() => handleLinkClick("Cart")}
          >
            Cart
          </a>
        </li>
        <li>
          <a
            href="Logout의 파일주소"
            className={activeLink === "Logout" ? "active" : ""}
            onClick={() => handleLinkClick("Logout")}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
