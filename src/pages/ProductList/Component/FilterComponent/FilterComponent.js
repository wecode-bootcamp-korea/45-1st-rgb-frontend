import React, { useState } from "react";

function FilterComponent({ shopContent, setShopContent }) {
  const [show, setShow] = useState(false);

  return (
    <div className="filterContent">
      <div className="priceAndButton">
        <span
          onClick={() => {
            setShow(!show);
          }}
        >
          전체보기
        </span>
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
              <button
                className="sortingButton"
                onClick={() => {
                  let thirdCopy = [...shopContent];
                  thirdCopy.sort((a, b) =>
                    a.categories_id < b.categories_id ? -1 : 1
                  );
                  setShopContent(thirdCopy);
                }}
              >
                전체 보기
              </button>
            </p>
            <p className="sorting">
              <button
                className="sortingButton"
                onClick={() => {
                  let secondCopy = [...shopContent];
                  secondCopy.sort((a, b) =>
                    Number(a.price) < Number(b.price) ? -1 : 1
                  );
                  setShopContent(secondCopy);
                }}
              >
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
                ABC순
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
