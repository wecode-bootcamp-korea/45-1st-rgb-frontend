import { React, useState } from "react";
import "./Cart.scss";
import CartList from "./CartList";
import { fetchApi } from "../../utils/fetchApi";
function Cart({ showCart, setShowCart, cartItems }) {
  const [items, setItems] = useState([]);

  const handleClose = () => {
    setShowCart(false);
  };

  const getCartsData = async () => {
    const response = await fetchApi(`carts`);
    setItems(response);
    console.log("response", response);
  };

  return (
    <div className="cart">
      <div className="cartBox">
        <div className="cartContainer">
          <div className={`cart ${showCart ? "show" : ""}`}>
            <CartList
              cartItems={items}
              setItems={setItems}
              handleClose={handleClose}
              setShowCart={setShowCart}
              getCartsData={getCartsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
