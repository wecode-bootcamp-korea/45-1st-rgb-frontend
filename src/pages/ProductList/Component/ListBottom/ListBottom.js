import React, { useState, useEffect } from "react";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";
import GoodsCategory from "../GoodsCategory/GoodsCategory";
import "./ListBottom.scss";

function ListBottom() {
  // Art Works 와 Goods 카테고리에 따른 컴포넌트 변화를 위한 useState
  const [category, setCategory] = useState("Artlist");
  const [artContent, setArtContent] = useState([]);
  const [goodsContent, setGoodsContent] = useState([]);
  const [onOff, setOnOff] = useState(artContent);
  // Goods 카테고리의 하위 카테고리 보이고 안보이기 위한 useState
  const [show, setShow] = useState(false);

  const artlist = () => {
    setCategory("Artlist");
  };

  const goodslist = () => {
    setCategory("Goodslist");
  };

  useEffect(() => {
    fetch("http://10.58.52.117:9000/products", {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then(res => res.json())
      .then(artdata => {
        setArtContent(artdata);
      });
  }, []);

  useEffect(() => {
    fetch("/data/goodslist.json")
      .then(res => res.json())
      .then(goodsdata => {
        setGoodsContent(goodsdata);
      });
  }, []);

  useEffect(() => {
    if (category === "Artlist") {
      setOnOff(artContent);
      setShow(false);
    } else if (category === "Goodslist") {
      setOnOff(goodsContent);
      setShow(true);
    }
  }, [artContent, goodsContent, category]);

  return (
    <div className="listBottom">
      <div className="bottomTop">
        <div className="category">
          <span onClick={artlist}>Art Works</span>
          <span onClick={goodslist}>Goods</span>
        </div>
        {show && <GoodsCategory />}
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter />
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
