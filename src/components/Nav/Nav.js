import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [navData, setNavData] = useState([]);
  const [showCategory, setShowCategory] = useState("hidden");
  console.log(navData);

  useEffect(() => {
    fetch("/data/navData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setNavData(data);
      });
  }, []);

  return (
    <>
      {navData.map(data => {
        return (
          <div className="nav">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <ul className="navList">
              <div className="navBox">
                <li>
                  <Link to="/Artists">Artists</Link>
                </li>
                <li
                  onMouseEnter={() => setShowCategory("shopCategory")}
                  onMouseLeave={() => setShowCategory("hidden")}
                  className="categoryShop"
                >
                  Shop
                  <div className={showCategory}>
                    <p>
                      <Link to="/productList">Art </Link>
                    </p>
                    <p>
                      <Link to="/productList">Goods</Link>
                    </p>
                  </div>
                </li>
              </div>
              <div className="navBox">
                <li>My Point {data.point}P</li>
                <li>
                  Cart <span className="cartCountButton"> {data.count}</span>
                </li>
              </div>
            </ul>
            {data.logIn ? (
              <button className="logIn">Log-in</button>
            ) : (
              <button className="logOut">Log-out</button>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Nav;
