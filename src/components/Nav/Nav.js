import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../pages/User/User";
import Cart from "../Cart/Cart";
import API_ADDRESS, { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  const [myCart, setMyCart] = useState([]);
  const [userData, setUserData] = useState([]);
  const [logIn, setLogIn] = useState("");
  const token = localStorage.getItem("TOKEN");
  const { user } = userData;
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  console.log("랜더링");
  useEffect(() => {
    if (!token) return;
    fetch(`${API_ADDRESS_ORDERS}users`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        console.log("myPoint", myPoint);
      });
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch(`${API_ADDRESS_ORDERS}carts`, {
      method: "GET",
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setMyCart(data);
        console.log("cartCount", cartCount);
      });
  }, []);

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
        <div
          onClick={() => {
            navigate("/");
            setLogIn("");
            setShowCart(false);
          }}
          className="logo"
        />
        <ul className="navList">
          <div className="navBox navBoxLeft">
            <li
              onClick={() => {
                setLogIn("");
                setShowCart(false);
                navigate("/artists");
              }}
            >
              Artists
            </li>
            <li
              onClick={() => {
                setLogIn("");
                setShowCart(false);
                navigate("/productList/all");
              }}
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
