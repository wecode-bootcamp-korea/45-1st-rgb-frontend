import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import { ARTFILTER } from "../LeftFilter/ArtFilter";
// import { GOODSFILTER } from "../LeftFilter/GoodsFilter";
// import GoodsCategory from "../GoodsCategory/GoodsCategory";
import "./ListBottom.scss";

function ListBottom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 10;
  const category = searchParams.get("category");
  // const subCategory = searchParams.get("subCategory");
  // // Art Works 와 Goods 카테고리에 따른 컴포넌트 변화를 위한 useState
  // const [shopCategory, setShopCategory] = useState("Artlist");
  // fetch 데이터 저장하는 useState
  const [shopContent, setShopContent] = useState([]);

  // goods 필터용 useState
  const [filter, setFilter] = useState(ARTFILTER);

  // Goods 카테고리의 하위 카테고리 보이고 안보이기 위한 useState
  // const [show, setShow] = useState(false);

  // const art = shopContent.filter((artworks) => artworks.categories_id === 1);

  // const goods = shopContent.filter((goods) => goods.categories_id !== 1);

  // art 랑 goods categories_id 에 따라 filter

  // const livingGoods = shopContent.filter(cup => cup.categories_id === 2);
  // const phoneCase = shopContent.filter(
  //   phonecase => phonecase.categories_id === 4 || phonecase.categories_id === 5
  // );
  // const poster = shopContent.filter(posters => posters.categories_id === 3);

  // const onClickArt = () => {
  //   searchParams.set("category", 1);
  //   searchParams.delete("subCategory");
  //   setSearchParams(searchParams);
  //   setShow(false);
  //   setFilter(ARTFILTER);
  // };

  // const onClickGoods = () => {
  //   searchParams.set("category", 2);
  //   setSearchParams(searchParams);

  //   setShow(true);
  //   setFilter(GOODSFILTER);
  // };

  const page = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);
  };

  // const deleteCategory = () => {
  //   searchParams.delete("subCategory");
  // };

  useEffect(() => {
    const url = `http://10.58.52.169:9001/products/all?limit=${limit}&start=${offset}`;

    // const url = `http://10.58.52.169:9001/products?limit=${limit}&start=${offset}&category=${category}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" }
    })
      .then((res) => res.json())
      .then((shop) => {
        setShopContent(shop);
      });
  }, [offset, limit, searchParams]);

  // useEffect(() => {
  //   const url = `/data/artlist.json?limit=${limit}&start=${offset}&category=${category}`;
  //   console.log(url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((shop) => {
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
              // onClickArt();
            }}>
            All
          </span>
          {/* <span
            onClick={() => {
              page();
              // onClickGoods();
            }}>
            <Link to="/productList">Goods</Link>
          </span> */}
        </div>
        {/* {show && (
          <GoodsCategory
            // category={category}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            // subCategory={subCategory}
            shopContent={shopContent}
          />
        )} */}
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter filter={filter} />
        </div>
        <div className="bottomRight">
          <div className="artworkBox">
            {shopContent.map((art) => {
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
