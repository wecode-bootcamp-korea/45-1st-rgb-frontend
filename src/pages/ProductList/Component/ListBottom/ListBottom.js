import React, { useState, useEffect } from "react";
import "./ListBottom.scss";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";

function ListBottom() {
  const [category, setCategory] = useState("Artlist");
  const [artContent, setArtContent] = useState([]);
  const [goodsContent, setGoodsContent] = useState([]);
  const [onOff, setOnOff] = useState(artContent);

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
    } else if (category === "Goodslist") {
      setOnOff(goodsContent);
    }
  }, [artContent, goodsContent, category]);

  return (
    <div className="listBottom">
      <div className="bottomTop">
        <span onClick={artlist}>Art Works</span>
        <span onClick={goodslist}>Goods</span>
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
