import React from "react";

function GoodsCategory({
  searchParams,
  setSearchParams,
  subCategory,
  shopContent,
}) {
  const click = (a, b) => {
    searchParams.set(a, b);
    setSearchParams(searchParams);
  };
  // const clickLivingGoods = () => {
  //   searchParams.set("subCategory", "LivingGoods");
  //   setSearchParams(searchParams);
  // };

  // const clickCase = () => {
  //   searchParams.set("subCategory", "PhoneCase");
  //   setSearchParams(searchParams);
  // };

  // const clickPoster = () => {
  //   searchParams.set("subCategory", "Poster");
  //   setSearchParams(searchParams);
  // };

  return (
    <div className="goodsCategory">
      <button
        onClick={() => {
          click("subCategory", "LivingGoods");
        }}
      >
        Living Goods
      </button>
      <button
        onClick={() => {
          click("subCategory", "PhoneCase");
        }}
      >
        Phone Case
      </button>
      <button
        onClick={() => {
          click("subCategory", "Poster");
        }}
      >
        Poster
      </button>
    </div>
  );
}

export default GoodsCategory;
