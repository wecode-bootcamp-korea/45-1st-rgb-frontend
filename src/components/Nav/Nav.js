import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../pages/User/User";
import Cart from "../Cart/Cart";
import { fetchApi } from "../../utils/fetchApi";
import "./Nav.scss";
import { useRecoilValue } from "recoil";
import { navDataUpdateState } from "../../recoil/atom";

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [myCart, setMyCart] = useState([]);
  const [myPoint, setMyPoint] = useState();
  const [logIn, setLogIn] = useState("");
  const [showCart, setShowCart] = useState(false);
  const navDataUpdate = useRecoilValue(navDataUpdateState);

  const getUserData = async () => {
    if (!token) return;
    const response = await fetchApi(`users`);
    const { user } = response;
    if (user) {
      setMyPoint(Math.floor(user.points));
    }
  };

  const getCartsData = async () => {
    if (!token) return;
    const response = await fetchApi(`carts`);
    setMyCart(response);
  };

  const logOut = () => {
    setMyCart([]);
    localStorage.removeItem("TOKEN");
    navigate("/");
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    getUserData();
    getCartsData();
  }, [navDataUpdate]);

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
                navigate("/artist");
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
              <li>My Point : {myPoint | 0}P</li>
            )}
            <li onClick={toggleCart}>
              Cart <span className="cartCountButton">{myCart.length}</span>
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
