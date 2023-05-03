import React from "react";
import "./List.scss";

function ListBottom() {
  return (
    <div className="list">
      <div className="listTop">
        <span>Art Works</span>
        <span>Goods</span>
      </div>
      <div className="listLeft">
        <p>
          Show only available art work
          <button className="checkbox">check</button>
        </p>
        <p>
          Themes
          <button className="arrow">arrow</button>
        </p>
        <p>
          Price
          <button className="arrow">arrow</button>
        </p>
        <p>
          Style
          <button className="arrow">arrow</button>
        </p>
        <p>
          Techniques
          <button className="arrow">arrow</button>
        </p>
        <p>
          Color
          <button className="arrow">arrow</button>
        </p>
      </div>
      <div className="listRight">
        {ArtList.map(art => {
          return (
            <div className="piece" key={art.id}>
              <img alt="artimg" src={`${art.img}`} />
              <p>{art.name}</p>
              <p>{art.price}</p>
              <p>{art.material}</p>
              <p>{art.size}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListBottom;

const ArtList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    name: "endorphine 2023",
    price: "$2500",
    material: "Acrylic on Wood",
    size: "100 x 150 cm",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "What a Delight! 2021",
    price: "$1000",
    material: "Acrylic on Wood",
    size: "65 x 100 cm",
  },
];
