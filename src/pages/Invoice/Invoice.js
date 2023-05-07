import React from "react";
// import "./Invoice.scss";

const Invoice = () => {
  return (
    <div className="invoice">
      <div class="invoiceSubNav">
        <div class="subNavItems">
          <p class="subNavItem">배송 정보 > </p>
          <p class="subNavItem">결제 방법 ></p>
          <p class="subNavItem">주문 확인</p>
        </div>
      </div>

      <div>
        <div class="invoiceTitle">
          <h1 class="title">결제가 완료되었습니다.</h1>
        </div>

        <div class="invoiceTop">
          <div class="boxTopItems">
            <p class="boxTopItem">주문자 성함</p>
            <p>홍길동 </p>
            <p>abc@gamil.com</p>
            <p class="boxTopItem">주문 번호</p>
            <p>asw123123dsfasdf </p>
          </div>
        </div>

        <div class="invoiceMiddle">
          <div class="boxMiddleItems">
            <p class="boxMiddleItem">배송 정보</p>
            <p>홍길동 </p>
            <p>서울 강남구 테헤란로 427, 위워크 10층</p>
            <p>05695</p>
            <p>무료 배송</p>
            <p class="boxMiddleItem">남용 가용 포인트</p>
            <p>2400p</p>
          </div>
        </div>

        <div class="invoiceBottom">
          <div class="boxBottomItems">
            <p class="boxBottomItem">주문 정보</p>
            <p>사진 이미지.</p>
            <p class="boxDetails"> </p>
            <div class="detailFirst">
              <p>Dots2023</p> <p>1개</p> <p>$2500</p>
            </div>
            <div class="detailSecond">
              <p>소계(세금 포함)</p> <p>$2500</p>
            </div>
            <div class="detailThird">
              <p>배송비</p> <p>무료</p>
            </div>
            <div class="detailFourth">
              <p>세금 포함</p> <p>세금</p> <p>$3</p>
            </div>
            <div class="detailEnd">
              <p>합계</p> <p>$2500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
