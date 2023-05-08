import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import GoodsFilter from "../LeftFilter/GoodsFilter";
import ArtFilter from "../LeftFilter/ArtFilter";
import GoodsCategory from "../GoodsCategory/GoodsCategory";
import "./ListBottom.scss";

function ListBottom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 10;
  const category = searchParams.get("category") || "arts";
  const subCategory = searchParams.get("subCategory");
  // // Art Works 와 Goods 카테고리에 따른 컴포넌트 변화를 위한 useState
  // const [shopCategory, setShopCategory] = useState("Artlist");
  // fetch 데이터 저장하는 useState
  const [shopContent, setShopContent] = useState([]);
  const [onOff, setOnOff] = useState(shopContent);
  // goods 필터용 useState
  const [filter, setFilter] = useState(ArtFilter);

  // Goods 카테고리의 하위 카테고리 보이고 안보이기 위한 useState
  const [show, setShow] = useState(false);

  // art 랑 goods categories_id 에 따라 filter
  const arts = shopContent.filter(list => list.categories_id === 1);

  const goods = shopContent.filter(list => list.categories_id !== 1);

  const onClickArt = () => {
    searchParams.set("category", "arts");
    setSearchParams(searchParams);
    setOnOff(arts);
    setShow(false);
    setFilter(ArtFilter);
  };

  const onClickGoods = () => {
    searchParams.set("category", "goods");
    setSearchParams(searchParams);
    setOnOff(goods);
    setShow(true);
    setFilter(GoodsFilter);
  };

  const page = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const url = `http://10.58.52.169:9000/products?limit=${limit}&start=${offset}&category=${category}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(shop => {
        setShopContent(shop);
      });
  }, [offset, limit, searchParams]);

  // useEffect(() => {
  //   const url = `/data/artlist.json?limit=${limit}&start=${offset}&category=${category}`;
  //   console.log(url);
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(shop => {
  //       setShopContent(shop);
  //     });
  // }, [offset, limit, category, subCategory]);

  // useEffect(() => {
  //   if (category === "arts") {
  // setOnOff(arts);
  // setShow(false);
  // setFilter(ArtFilter);
  //   } else {
  // setOnOff(goods);
  // setShow(true);
  // setFilter(GoodsFilter);
  //   }
  // }, [category, arts, goods]);

  return (
    <div className="listBottom">
      <div className="bottomTop">
        <div className="category">
          <span
            onClick={() => {
              page();
              onClickArt();
            }}
          >
            Art Works
          </span>
          <span
            onClick={() => {
              page();
              onClickGoods();
            }}
          >
            Goods
          </span>
        </div>
        {show && (
          <GoodsCategory
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            subCategory={subCategory}
            shopContent={shopContent}
            setOnOff={setOnOff}
          />
        )}
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter filter={filter} />
        </div>
        <div className="bottomRight">
          <div className="artworkBox">
            {onOff.map(art => {
              return <ArtWorks art={art} key={art.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBottom;
