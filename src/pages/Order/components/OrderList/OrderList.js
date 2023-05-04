import React from "react";
import "./OrderList.scss";

function OrderList() {
  return (
    <div className="orderList">
      <div className="orderListBox">
        <div className="orderItemWrapper">
          <ul className="orderItem">
            <li>소계(세금 포함)</li>
            <li>$2500</li>
          </ul>
          <ul className="orderItem">
            <li>배송비</li>
            <li>0</li>
          </ul>
          <ul className="orderItem">
            <li>포함된 세금</li>
            <li>0</li>
          </ul>
          <ul className="orderItem">
            <li>합계</li>
            <li>$2500</li>
          </ul>
        </div>
        <div className="checkoutProduct">
          <div className="thumbnailWrap">
            <img
              alt="product thumbnail"
              src="https://images.pexels.com/photos/3792175/pexels-photo-3792175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="checkoutProductRight">
            <div className="topRow">
              <h5>Dots 2023</h5>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="bottomRow">
              <button>삭제</button>
              <span>$2600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
