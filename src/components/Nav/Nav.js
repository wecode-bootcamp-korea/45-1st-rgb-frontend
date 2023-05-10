import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../pages/User/User";
import API_ADDRESS from "../../utils/API_ADDRESS";
import "./Nav.scss";
import Cart from "../Cart/Cart";

const Nav = () => {
  const navigate = useNavigate();
  const [myCart, setMyCart] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showCategory, setShowCategory] = useState("hidden");
  const [logIn, setLogIn] = useState("");
  const token = localStorage.getItem("TOKEN");
  const { user } = userData;

  useEffect(() => {
    if (!token) return;
    fetch("http://10.58.52.195:3000/users", {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch("http://10.58.52.195:3000/carts", {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setMyCart(data);
      });
  }, []);

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (token) return setLogIn("");
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("TOKEN");
    navigate("/");
  };

  const myPoint = Math.floor(user?.points);
  const cartCount = myCart.length;
  return (
    <>
      <div className="nav">
        <div onClick={() => navigate("/")} className="logo" />
        <ul className="navList">
          <div className="navBox navBoxLeft">
            <li onClick={() => navigate("/Artists")}>Artists</li>
            <li
              onClick={() => navigate("/productList")}
              className="categoryShop"
            >
              Shop
            </li>
          </div>
          <div className="navBox navBoxRight">
            {!token ? (
              <li onClick={() => setLogIn(<User setLogIn={setLogIn} />)}>
                My Point
              </li>
            ) : (
              <li>My Point : {myPoint}P</li>
            )}
            <li onClick={toggleCart}>
              Cart <span className="cartCountButton">{cartCount}</span>
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
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </>
  );
};
export default Nav;
