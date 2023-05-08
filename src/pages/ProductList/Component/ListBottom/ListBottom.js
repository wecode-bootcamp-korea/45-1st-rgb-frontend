import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
  // goods 필터용 useState
  const [filter, setFilter] = useState(ArtFilter);

  // Goods 카테고리의 하위 카테고리 보이고 안보이기 위한 useState
  const [show, setShow] = useState(false);

  // art 랑 goods categories_id 에 따라 filter

  // const livingGoods = shopContent.filter(cup => cup.categories_id === 2);
  // const phoneCase = shopContent.filter(
  //   phonecase => phonecase.categories_id === 4 || phonecase.categories_id === 5
  // );
  // const poster = shopContent.filter(posters => posters.categories_id === 3);

  const onClickArt = () => {
    searchParams.set("category", "arts");
    searchParams.delete("subCategory");
    setSearchParams(searchParams);
    setShow(false);
    setFilter(ArtFilter);
  };

  const onClickGoods = () => {
    searchParams.set("category", "goods");
    setSearchParams(searchParams);

    setShow(true);
    setFilter(GoodsFilter);
  };

  const page = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);
  };

  // const deleteCategory = () => {
  //   searchParams.delete("subCategory");
  // };

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
          />
        )}
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter filter={filter} />
        </div>
        <div className="bottomRight">
          <div className="artworkBox">
            {shopContent.map(art => {
              return (
                <Link key={art.id} to={`/productDetail/${art.id}`}>
                  <ArtWorks art={art} key={art.id} />;
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBottom;
