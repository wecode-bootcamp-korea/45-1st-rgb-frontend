import React from "react";
import Location from "./Components/Location/Location";
import DetailLeft from "./Components/DetailLeft/DetailLeft";
import DetailRight from "./Components/DetailRight/DetailRight";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="productDetail">
      <Location />
      <DetailLeft />
      <DetailRight detailInfo={detailInfo} />
    </div>
  );
}

export default ProductDetail;

const detailInfo = {
  id: 1,
  title: "What a Delight 2023",
  artistName: "HaeChan, USA, 1990",
  productsSizeLeft: 100,
  productsSizeRight: 80,
  material: "Acrylic on the Canvas",
  description:
    "해찬 작가의 초작. 고난 뒤의 영광을 맞이한 작가의 심리가 여지없이 드러나 있다.",
  price: "$2500",
  quantity: 1,
  maxQuantity: 5,
};
