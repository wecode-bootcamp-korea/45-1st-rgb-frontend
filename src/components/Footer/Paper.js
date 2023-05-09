import React from "react";
import "./Paper.scss";
const Paper = () => {
  return (
    <div className="list">
      <ul className="texts">
        <li>[뉴스] rgb. 리뉴얼 기념 할인 쿠폰 증정 이벤트</li>
        <li>
          [이달의 작가] 감각적인 구성과 순수한 생동감을 담아내는 아티스트,
          장예지
        </li>
        <li>
          [설치 사례] 작품협찬 넷플릭스 '더 글로리' 작품을 전시 납품하였습니다.
        </li>
        <li>[정보] rgb. 에서 가상 인테리어 서비스를 실시합니다.</li>
        <li>
          [뉴스] 2023.03.01부터 부천점과 분당점 쇼룸이 강남점으로 통합
          운영됩니다.
        </li>
      </ul>
    </div>
  );
};

export default Paper;
