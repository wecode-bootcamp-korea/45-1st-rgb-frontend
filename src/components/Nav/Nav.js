import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [navData, setNavData] = useState([]);
  const [showCategory, setShowCategory] = useState("hidden");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/navData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setNavData(data);
      });
  }, []);

  const logOut = () => {
    localStorage.removeItem("TOKEN");
    navigate("/");
  };

  return (
    <>
      {navData.map(data => {
        return (
          <div className="nav">
            <div onClick={() => navigate("/")} className="logo"></div>
            <ul className="navList">
              <div className="navBox navBoxLeft">
                <li onClick={() => navigate("/Artists")}>Artists</li>
                <li
                  onClick={() => navigate("/productList")}
                  onMouseEnter={() => setShowCategory("shopCategory")}
                  onMouseLeave={() => setShowCategory("hidden")}
                  className="categoryShop"
                >
                  Shop
                  <div
                    onMouseEnter={() => setShowCategory("shopCategory")}
                    onMouseLeave={() => setShowCategory("hidden")}
                    className={`categoryShop ${showCategory}`}
                  >
                    <p onClick={() => navigate("/productList")}>Art</p>
                    <p onClick={() => navigate("/productList")}>Goods</p>
                  </div>
                </li>
              </div>
              <div className="navBox navBoxRight">
                <li>My Point {data.point}P</li>
                <li>
                  Cart <span className="cartCountButton"> {data.count}</span>
                </li>
              </div>
            </ul>
            {data.logIn ? (
              <button className="logIn">Log-in</button>
            ) : (
              <button className="logOut" onClick={() => logOut()}>
                Log-out
              </button>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Nav;
