import React from "react";

function FilterComponent({ content }) {
  return (
    <div className="filterContent">
      <div className="priceAndButton">
        <span>{content.title}</span>
        <button>
          <img alt="button" src="/images/productList/Expand Arrow.png" />
        </button>
      </div>
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
    </div>
  );
}

export default FilterComponent;
