import React from "react";
import "./MainArtist.scss";
import { useNavigate } from "react-router-dom";

export default function MainArtist() {
  const navigate = useNavigate();
  return (
    <div className="introContainer">
      <div className="boxContainer">
        <div className="boxImg" />
        <div className="introText">
          <p className="firstText">Meet our international artists</p>
          <p className="secondText">5월의 아티스트, Kris Gebhardt</p>
          <button className="textMore">
            <p
              className="moreButton"
              onClick={() => navigate("productDetail/:id")}
            >
              작품 더보기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
