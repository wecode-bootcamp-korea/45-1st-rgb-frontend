import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import "./ListBottom.scss";

function ListBottom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 10;
  // fetch 데이터 저장하는 useState
  const [shopContent, setShopContent] = useState([]);

  const page = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const url = `http://10.58.52.169:9001/products/all?limit=${limit}&start=${offset}`;

    // const url = `http://10.58.52.169:9001/products?limit=${limit}&start=${offset}&category=${category}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(shop => {
        setShopContent(shop);
      });
  }, []);

  // useEffect(() => {
  //   const url = `/data/artlist.json?limit=${limit}&start=${offset}`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(shop => {
  //       setShopContent(shop);
  //     });
  // }, []);

  return (
    <div className="listBottom">
      <div className="bottomTop">
        <div className="category">
          <span
            onClick={() => {
              page();
            }}
          >
            All
          </span>
        </div>
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter
            shopContent={shopContent}
            setShopContent={setShopContent}
          />
        </div>
        <div className="bottomRight">
          <div className="artworkBox">
            {shopContent.map(art => {
              return (
                <Link key={art.id} to={`/productDetail/${art.id}`}>
                  <ArtWorks art={art} key={art.id} />
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
