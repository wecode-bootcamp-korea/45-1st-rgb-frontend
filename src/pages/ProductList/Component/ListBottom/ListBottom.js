import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import API_ADDRESS from "../../../../utils/API_ADDRESS";
import "./ListBottom.scss";

function ListBottom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 4;
  const [shopContent, setShopContent] = useState([]);

  useEffect(() => {
    const url = `${API_ADDRESS}products/all?limit=${limit}&offset=${offset}`;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(shop => {
        setShopContent(shop);
      });
  }, [offset, limit]);

  const reset = () => {
    searchParams.set("offset", 0);
    searchParams.set("limit", 10);
    setSearchParams(searchParams);
  };

  const movePage = pageNumber => {
    searchParams.set("offset", (pageNumber - 1) * 4);
    searchParams.set("limit", 4);
    setSearchParams(searchParams);
  };

  return (
    <div className="listBottom">
      <div className="bottomTop">
        <div className="category">
          <span onClick={reset}>All</span>
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
          <div className="pageButton">
            <button
              onClick={() => {
                movePage(1);
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                movePage(2);
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                movePage(3);
              }}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBottom;
