import React from "react";
import "./MainArtist.scss";

export default function MainArtist() {
  return (
    <div className="introContainer">
      <div className="boxContainer">
        <div className="boxImg" />
        <div className="introText">
          <p className="firstText">Meet our international artists</p>
          <p className="secondText">5월의 아티스트, Kris Gebhardt</p>
          <button className="textMore">
            <p className="moreButton">작품 더보기</p>
          </button>
        </div>
      </div>
    </div>
  );
}
