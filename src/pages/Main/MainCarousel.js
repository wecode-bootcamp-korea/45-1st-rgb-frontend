import React from "react";
import "./MainCarousel.scss";

export default function MainCarousel() {
  return (
    <div className="box2">
      {/* // 캐러셀 이미지 */}
      <div className="artistBox">
        <div className="artistImg">
          <div className="artistText">
            rgb . 에서 가장 인기있는 아티스트를 만나보세요
          </div>
          <div className="artistText2">작품 더보기</div>
        </div>
        <div className="artistBox2">
          <div className="artistImg2" />
          <div className="textBox">
            <div className="textBoxName">
              Tommy Dollar <div className="textBoxSize">220 x 480</div>
            </div>
          </div>
        </div>
        <div className="artistBox3">
          <div className="artistImg3" />
          <div className="textBox">
            <div className="textBoxName">
              Tommy Dollar <div className="textBoxSize">220 x 480</div>
            </div>
          </div>
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

      <div className="indicatorBar">
        <div className="Bar1">
          <div className="Bar2" />
        </div>
      </div>
    </div>
  );
}
