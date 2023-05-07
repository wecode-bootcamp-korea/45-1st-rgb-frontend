import React from "react";

function GoodsCategory({
  searchParams,
  setSearchParams,
  subCategory,
  shopContent,
}) {
  const clickLivingGoods = () => {
    searchParams.set("subCategory", "LivingGoods");
    setSearchParams(searchParams);
  };

  const clickCase = () => {
    searchParams.set("subCategory", "PhoneCase");
    setSearchParams(searchParams);
  };

  const clickPoster = () => {
    searchParams.set("subCategory", "Poster");
    setSearchParams(searchParams);
  };

  return (
    <div className="goodsCategory">
      <button onClick={clickLivingGoods}>Living Goods</button>
      <button onClick={clickCase}>Phone Case</button>
      <button onClick={clickPoster}>Poster</button>
    </div>
  );
}

export default GoodsCategory;
