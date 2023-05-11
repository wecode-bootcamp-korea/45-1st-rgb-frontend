import React from "react";
import "./ArtistProfile.scss";

export default function ArtistProfile() {
  return (
    <div className="artistProfile">
      <div className="artistProfileColumn">
        <p>Hae Chan은 현재 서울에서 활동하며 개성적이고 창조적인</p>
        <p>작품을 선보이고 있습니다. 또한, 그의 작품은 주로 추상화된</p>
        <p>형태와 색채적인 요소를 활용하여 구성되며, 이를 통해 감각</p>
        <p>적이고 독창적인 경험을 선사합니다.</p>
      </div>

      <div className="artistProfileColumnTwo">
        <p>Hae Chan은 여러 번의 전시회를 성공적으로 개최하며</p>
        <p>대중들로부터 높은 평가를 받았습니다. 그의 작품은 대담</p>
        <p>하고 화려한 색조와 복잡한 패턴으로 구성되어 있으며, </p>
        <p>이는 현대미술의 추세를 잘 반영하고 있습니다.</p>
      </div>
    </div>
  );
}
