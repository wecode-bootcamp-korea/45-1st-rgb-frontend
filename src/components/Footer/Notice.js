import React from "react";
import "./Notice.scss";
const Notice = () => {
  return (
    <div className="list">
      <ul className="texts">
        <li>[공지] 5/5, 5/23 '대체 공휴일' 휴무 안내 입니다.</li>
        <li>
          [공지] 개인정보 처리방침 사전 변경 안내 (시행날자:2023년 3월 10일)
        </li>
        <li>[공지] 리뷰운영 정책 사전 변경 안내 (22.12.21 시행)</li>
        <li>[공지] 안드로이드 OS 최소지원버전 관련 안내</li>
        <li>
          [공지] 포인트 적립금 사용 후 주문 환불로 인한 반환 관련 공지사항
        </li>
      </ul>
    </div>
  );
};

export default Notice;
