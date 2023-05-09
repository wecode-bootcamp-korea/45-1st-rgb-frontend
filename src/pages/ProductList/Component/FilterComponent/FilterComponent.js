import React, { useState } from "react";

function FilterComponent({ content }) {
  const [show, setShow] = useState(false);

  return (
    <div className="filterContent">
      <div className="priceAndButton">
        <span className="all">전체보기</span>
        {/* 보이기 버튼 */}
        <button
          onClick={() => {
            setShow(!show);
          }}>
          <img
            alt="button"
            src={`${
              show
                ? "/images/productList/Expand Arrow2.png"
                : "/images/productList/Expand Arrow.png"
            }`}
          />
        </button>
      </div>
      <div>
        {show ? (
          <div className="contentButton">
            {content.map((content) => {
              return (
                <p className="sorting" key={`${content.id}`}>
                  <button>{content.title}</button>
                </p>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
