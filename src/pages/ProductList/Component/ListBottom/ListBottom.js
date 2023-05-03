import React from "react";
import "./ListBottom.scss";
import ArtWorks from "../ArtWorks/ArtWorks";
import LeftFilter from "../LeftFilter/LeftFilter";

function ListBottom() {
  return (
    <div className="listBottom">
      <div className="bottomTop">
        <span>Art Works</span>
        <span>Goods</span>
      </div>
      <div className="bottomBottom">
        <div className="bottomLeft">
          <LeftFilter />
        </div>
        <div className="bottomRight">
          {ArtList.map(art => {
            return <ArtWorks art={art} key={art.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListBottom;

const ArtList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    title: "endorphine 2023",
    price: "$2500",
    material: "Acrylic on Wood",
    productsSizeLeft: "100",
    productsSizeRight: "150",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "What a Delight! 2021",
    price: "$1000",
    material: "Acrylic on Wood",
    productsSizeLeft: "65",
    productsSizeRight: "100",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1580136608079-72029d0de130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    title: "garden",
    price: "$1300",
    material: "Acrylic on Wood",
    productsSizeLeft: "100",
    productsSizeRight: "150",
  },
  {
    categoryId: 4,
    img: "https://images.unsplash.com/photo-1602407069119-e0c6f1602e31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "unicorn",
    price: "$1100",
    material: "Acrylic on Wood",
    productsSizeLeft: "120",
    productsSizeRight: "100",
  },
];
