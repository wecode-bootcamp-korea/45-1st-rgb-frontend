import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../pages/User/User";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  const [myPoint, setMyPoint] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showCategory, setShowCategory] = useState("hidden");
  const [logIn, setLogIn] = useState("");
  const token = localStorage.getItem("TOKEN");

  if (token) {
    const { user } = userData;
    setMyPoint(Math.floor(user.points));
  }

  useEffect(() => {
    fetch("http://10.58.52.169:9000/users", {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  const logOut = () => {
    localStorage.removeItem("TOKEN");
    navigate("/");
  };

  return (
    <>
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
            {!token ? (
              <li onClick={() => setLogIn(<User setLogIn={setLogIn} />)}>
                My Point
              </li>
            ) : (
              <li>My Point : {myPoint} P</li>
            )}
            <li>
              Cart <span className="cartCountButton">3</span>
            </li>
          </div>
        </ul>
        {!token ? (
          <button
            className="logIn"
            onClick={() => setLogIn(<User setLogIn={setLogIn} />)}
          >
            Log-in
          </button>
        ) : (
          <button className="logOut" onClick={() => logOut()}>
            Log-out
          </button>
        )}
      </div>
      {logIn}
    </>
  );
};
export default Nav;
