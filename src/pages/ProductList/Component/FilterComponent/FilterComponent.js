import React, { useState } from "react";

function FilterComponent({ shopContent, setShopContent }) {
  const [show, setShow] = useState(false);

  return (
    <div className="filterContent">
      <div className="priceAndButton">
        <span className="all">전체보기</span>
        {/* 보이기 버튼 */}
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
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
            <p className="sorting">
              <button className="sortingButton" onClick={() => {}}>
                가격순
              </button>
            </p>
            <p className="sorting">
              <button
                className="sortingButton"
                onClick={() => {
                  let copy = [...shopContent];
                  copy.sort((a, b) =>
                    a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
                  );
                  setShopContent(copy);
                }}
              >
                가나다순
              </button>
            </p>
            {/* {content.map((content) => {
              return (
                <p className="sorting" key={`${content.id}`}>
                  <button className="sortingButton">{content.title}</button>
                </p>
              );
            })} */}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
