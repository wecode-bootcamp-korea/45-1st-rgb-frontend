import { useState } from "react";
import "./Footer.scss";
import Notice from "./Notice";
import Paper from "./Paper";
import Left from "./Left";
import Right from "./Right";

const Footer = () => {
  const [notice, setNotice] = useState("N");

  return (
    <div className="total">
      <div className="totalLeft">
        <div className="buttons">
          <button
            className="leftButton"
            onClick={() => {
              setNotice("N");
            }}
          >
            <div className="point">NOTICE</div>
          </button>
          <button
            className="rightButton"
            onClick={() => {
              setNotice("P");
            }}
          >
            <div className="aim">NEWS</div>
          </button>
          <div>{notice === "N" ? <Left /> : <Right />}</div>
        </div>
        <div>{notice === "N" ? <Notice /> : <Paper />}</div>

        <div className="cs">
          <div className="faq">FAQ</div>
          <div className="inquiry">1 : 1 문의</div>
        </div>
      </div>
      <div className="totalRight">
        <div className="companyInfo">
          <div className="csCenter">고객센터</div>
          <div className="phone">070-4323-4050</div>
          <div className="hours">
            운영시간:평일 09:00 ~ 18:00 (점심시간: 12: 30 ~ 13: 30)
          </div>
          <div className="mail">info@rgb.com</div>
        </div>
        <div className="termsOfUse">
          <div className="policy">개인정보처리방침 | 이용약관</div>
          <div className="address">
            <div>
              상호명: 주식회사 rgb. 사업장소재지: 서울특별시 강남구 테헤란로
              427길 13층 팩스:050713214553
            </div>
            <div>
              사업자등록번호: 532-81-01317 통신판매업신고: 2023서울강남01952
              [사업자정보확인] 전화번호: 07043234050
            </div>
            이메일:
            <span className="underBar">customer@rgb.co.kr </span>
            대표: 윤해찬 개인정보 보호책임자 : 이수빈 호스팅서비스 : (주)위코드
          </div>
          <div className="alert">
            <div>
              일부 상품의 경우 rgb.는 통신판매의 당사자가 아닌
              통신판매중개자로서 상품, 상품정보,거래에 대한 책임이
            </div>
            <div>
              제한될 수 있으므로, 각 상품페이지에서 구체적인 내용을 확인하시기
              바랍니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
