import React, { useState, useEffect, useRef } from "react";
import "./MainCarousel2.scss";

export default function MainCarasol2() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <div className="box4">
      <div className="goodsBox">
        <div className="goodsImg">1</div>
        <div className="buttonBox2">
          <div className="buttonBox1">
            <button className="buttonPre2" />
          </div>
          <div className="buttonBox">
            <button className="buttonNext2" />
          </div>
        </div>
      </div>
    </div>
  );
}
