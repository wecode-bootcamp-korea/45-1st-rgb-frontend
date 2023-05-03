import React from "react";
import "./LeftFilter.scss";

function LeftFilter({ Show }) {
  return (
    <div className="leftFilter">
      <div className="show">
        <label for="checkbox">Show only available artwork</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <div className="filters">
        <div className="filterContent">
          <div className="priceAndButton">
            <span>Price</span>
            <button>
              <img alt="button" src="/images/productList/Expand Arrow.png" />
            </button>
          </div>
          <div className="contentButton">
            <label for="price1">0만원 - 2만원</label>
            <input
              type="radio"
              id="price1"
              name="priceCheck"
              value="price1"
              checked
            />
          </div>
          <div className="contentButton">
            <label for="price2">2만원 - 5만원</label>
            <input type="radio" id="price2" name="priceCheck" value="price2" />
          </div>
        </div>
        <div className="filterContent">
          <div className="priceAndButton">
            <span>Size</span>
            <button>
              <img alt="button" src="/images/productList/Expand Arrow.png" />
            </button>
          </div>
          <div className="contentButton">
            <label for="size1">0만원 - 2만원</label>
            <input
              type="radio"
              id="size1"
              name="sizeCheck"
              value="size1"
              checked
            />
          </div>
          <div className="contentButton">
            <label for="size2">2만원 - 5만원</label>
            <input type="radio" id="size2" name="sizeCheck" value="size2" />
          </div>
        </div>
        <div className="filterContent">
          <div className="priceAndButton">
            <span>Material</span>
            <button>
              <img alt="button" src="/images/productList/Expand Arrow.png" />
            </button>
          </div>
          <div className="contentButton">
            <label for="material1">0만원 - 2만원</label>
            <input
              type="radio"
              id="material1"
              name="materialCheck"
              value="material1"
              checked
            />
          </div>
          <div className="contentButton">
            <label for="material2">2만원 - 5만원</label>
            <input
              type="radio"
              id="material2"
              name="materialCheck"
              value="material2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFilter;
