import React from "react";
import Location from "./Components/Location/Location";
import DetailLeft from "./Components/DetailLeft/DetailLeft";
import DetailRight from "./Components/DetailRight/DetailRight";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="productDetail">
      <Location />
      <div className="detailBox">
        <div className="leftLeft">
          <DetailLeft />
        </div>
        <div className="leftRight">
          <DetailRight detailInfo={detailInfo} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

const detailInfo = {
  id: 1,
  title: "What a Delight! 2023",
  artistName: "HaeChan, USA, 1990",
  productsSizeLeft: 100,
  productsSizeRight: 80,
  material: "Acrylic on the Canvas",
  description:
    "해찬 작가의 초작. 고난 뒤의 영광을 맞이한 작가의 심리가 여지없이 드러나 있다.호로로록호로롥. 집에 가고싶다. 내일부터 기능 구현 어떠케하디 따흐흑 dkfkfkdkfkslkdjfliwajeofijawo;flkㅁㄴㅇ래ㅔㅁ쟈ㅓ래ㅑㅓㅣㅏasifjopawijefophaeporugopaiewjoflkmal;sdㄹ매 ㅑ적레ㅐㅁ저데ㅐ랴ㅓ메ㅐㄷ곃매ㅔ쟈ㅓ내어",
  price: "$2500",
  count: 1,
  quantity: 5,
};
