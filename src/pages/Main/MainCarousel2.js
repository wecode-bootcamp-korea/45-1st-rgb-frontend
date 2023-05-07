import React, { useState, useEffect, useRef } from "react";
import "./MainCarousel2.scss";
import SecondCarousel from "./SecondCarousel";

export default function MainCarasol2() {
  const [data, setData] = useState([]);

  return (
    <div className="goodsContainer">
      <ul className="goodsBox">
        <SecondCarousel />
      </ul>
      <div className="buttonContainer">
        <button className="buttonPre2" />
        <button className="buttonNext2" />
      </div>
    </div>
  );
}
