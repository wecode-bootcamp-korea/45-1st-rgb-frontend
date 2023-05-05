import React, { useState } from "react";

function FilterComponent({ content }) {
  const [show, setShow] = useState(false);

  return (
    <div className="filterContent">
      <div className="priceAndButton">
        <span>{content.title}</span>
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

          {/* <img alt="button" src="/images/productList/Expand Arrow.png" /> */}
        </button>
      </div>
      <div>
        {show ? (
          <>
            <div className="contentButton">
              <label for={`${content.content.first.id}`}>
                {content.content.first.contents}
              </label>
              <input
                type="radio"
                id={`${content.content.first.id}`}
                name={content.name}
                checked
              />
            </div>
            <div className="contentButton">
              <label for={`${content.content.second.id}`}>
                {content.content.second.contents}
              </label>
              <input
                type="radio"
                id={`${content.content.second.id}`}
                name={content.name}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
