import React from "react";
import "./Cart.scss";

function Cart() {
  return (
    <div className="cart">
      <div className="cartBox">
        <div className="cartLeft">
          <div className="cartList">
            <div className="cartTitle">카트</div>
            <div className="cartSize">사이즈</div>
            <div className="cartQuantity">수량</div>
            <div className="cartPrice">가격</div>
            {/* <div className="cartBtn">
            <button className="btnContainer" />
          </div> */}
          </div>
          <div className="cartItem">
            <div className="itemName">Product 1</div>
            <div className="itemSize">220 x 480 / 아크릴</div>
            <div className="itemQuantity">1</div>
            <div className="itemPrice">790,0000 원</div>
          </div>
          <div className="cartItem">
            <div className="itemName">Product 2</div>
            <div className="itemSize">220 x 480 / 아크릴</div>
            <div className="itemQuantity">1</div>
            <div className="itemPrice">790,0000 원</div>
          </div>

          <div className="cartSummary">
            <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
            <div className="totalPrice">
              <span className="vat">소계(세금 포함)</span>
              <span className="sum">1,580,000 원</span>
            </div>
            <button className="payBtn">결제하기</button>
          </div>
        </div>

        {/* 오른쪽 카트 입력칸 */}

        <div className="cartRight">
          <div className="cartForm">
            <div className="profileBox">
              <div className="profileImg" />
              <div className="profileText">
                작품에 관해 궁금한 점이 있으신가요?
              </div>
            </div>
            <div className="submitButton">
              <button className="cartButton">문의하기</button>
            </div>
            <div className="line">/</div>
            <div className="cartForm2">
              <div className="formContent">
                <p className="rgb">rgb . 만의 보증 서비스</p>
                <span className="span1">
                  감정서(Certificate of Authenticity) 포함된 원작
                </span>
                <span className="span2">계좌이체로 안전결제</span>
                <span className="span3">Safe shipping globally</span>
                <span className="span4">
                  수령일로부터 14일 이내에 무료로 반품 가능합니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
