import React from "react";
import "./MainCarousel.scss";

export default function MainCarousel() {
  return (
    <div className="box2">
      <div className="artistBox">
        <div className="artistImg">
          <div className="artistText">
            rgb . 에서 가장 인기있는 아티스트를 만나보세요
          </div>
          <div className="artistText2">작품 더보기</div>
        </div>
        <div className="artistBox2">
          <div className="artistImg2" />
          <p className="boxTextName">Tommy Dollar</p>
          <p className="boxTextNameUnder">사이즈</p>
        </div>
        <div className="artistBox3">
          <div className="artistImg3" />
          <p className="boxTextName">Tommy Dollar</p>
          <p className="boxTextNameUnder">사이즈</p>
        </div>
        <div className="buttonBox">
          <div className="buttonBox">
            <button className="buttonPre" />
          </div>
          <div className="buttonBox">
            <button className="buttonNext" />
          </div>
        </div>
      </div>
      <div className="imgBarContainor">
        <div className="imgBar">
          1
          <div className="imgBar2" />
        </div>
      </div>
    </div>
  );
}
