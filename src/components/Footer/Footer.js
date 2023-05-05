import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerFooterWrapper">
      <div className="footerFooter">
        <div className="footerGroupOverLap">
          <div className="footerGroup">
            <div className="footerinGroup" />
            <div className="footerinnerGroup">
              <p className="footerNotice1">
                [공지] 5/5, 5/23 '대체 공휴일'휴무 안내 입니다.
              </p>
              <p className="footerNotice2">
                [공지] 개인정보 처리방침 사전 변경 안내(시행일자 : 2023년 3월
                10일)
              </p>
              <p className="footerNotice3">
                {" "}
                [공지] 리뷰운영 정책 사전 변경 안내
              </p>
            </div>
            <p className="footerNotice4">
              [29CM 공지] 29CM 내 [LIKE 정렬]오류 안내
            </p>
            <p className="footerNotice5">
              [공지] 개인정보 처리방침 사전 변경 안내
            </p>
            <div className="footerTermsofusegroup">
              <div className="footerTermsofuse">
                <span className="termsofuseHead">
                  개인정보처리방침 | 이용약관
                  <br />
                </span>
              </div>
              <div className="termsofuseContext">
                <span className="termsofuseText">
                  상호명: 주식회사 무신사 사업장소재지: 서울특별시 성동구
                  아차산로 13길 11, 1층 팩스: 07086227737 사업자등록번호:
                  2118879575 통신판매업신고 2022서울성동01952 [사업자정보확인]
                  전화번호 : 16440560 이메일:
                </span>
                <a
                  href="mailto:customer@29cm.co.kr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="termsofuseEmail">customer@29cm.co.kr</span>
                </a>
                <span className="footerSpan">
                  대표: 한문일 개인정보 보호책임자 : 이인섭 호스팅서비스 :
                  (주)무신사
                  <br />
                </span>
              </div>
              <div className="footerText">
                <span className="footerSpan">
                  일부 상품의 경우 29CM는 통신판매의 당사자가 아닌
                  통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될
                  수 있으므로, 각 상품페이지에서 구체적인 내용을 확인하시기
                  바랍니다.
                </span>
              </div>

              <div className="footerLeft">FAQ</div>
              <div className="footerLeftbottom ">1:1문의</div>
              <div className="footerNews">
                <div className="footerNewstitle">NEWS</div>
              </div>
              <div className="footerNotice">NOTICE</div>
              <img className="footerNewsletter" alt="Line" src="line29.svg" />
              <img
                className="footerRectangle"
                alt="Rectangle"
                src="rectangle152.png"
              />
              <div className="customerService">
                <div className="customerserviceTitle">고객센터</div>
                <div className="newsLetter">뉴스레터 구독</div>
                <div className="newsletterSub">이메일</div>
                <p className="customerserviceSub">
                  {" "}
                  운영시간:평일 09:00 ~ 18:00 (점심시간: 12: 30 ~ 13: 30)
                </p>
                <div className="customerserviceEmail">info@rgb.com</div>
                <h1 className="customerservicePhone">0293452356</h1>
                <div className="newsletterSubgroup">
                  <div className="newsletterSubtext1">주문내역</div>
                  <div className="newsletterSubtext2">배송조회</div>
                  <div className="newsletterSubtext3">반품하기</div>
                  <div className="newsletterSubtext4">개인정보수정</div>
                </div>
                <img className="newsletterInit" alt="Line" src="line30.svg" />
                <div className="newsletterButton">
                  <div className="newsletterButtonwrapper">
                    <div className="newsletterButtonit">보내기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
