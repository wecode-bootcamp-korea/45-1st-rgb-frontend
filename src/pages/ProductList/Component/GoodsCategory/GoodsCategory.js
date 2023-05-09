import React from "react";

function GoodsCategory({ searchParams, setSearchParams, shopContent }) {
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
          click("category", 2);
        }}>
        Living Goods
      </button>
      <button
        onClick={() => {
          click("category", 3);
        }}>
        Phone Case
      </button>
      <button
        onClick={() => {
          click("category", 5);
        }}>
        Poster
      </button>
    </div>
  );
}

export default GoodsCategory;
