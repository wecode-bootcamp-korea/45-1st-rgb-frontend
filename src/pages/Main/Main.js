import React from "react";
import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <div className="wrap">
        <div className="box1">
          <div className="content1">
            <div className="titleContent">
              <p className="boxText">Artist of May</p>
            </div>
            <div className="boxButton">
              <button className="goToArtist">
                <p className="buttonText">바로가기</p>
              </button>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="content2">
            <div className="boxContent">
              <p className="boxText2">
                rgb . 에서 가장 인기있는 아티스트를 만나보세요
              </p>
              <button className="boxText3">작품 더보기</button>
            </div>
          </div>
          <div className="boxContainor2">
            <div className="box123">
              <div className="boxImg1" />
              <p className="boxTextName">Tommy Dollar</p>
            </div>
            <div className="box456">
              <div className="boxImg2" />
              <p className="boxTextName2">Tommy Dollar</p>
            </div>
          </div>
          <div className="buttonBox">
            <button className="buttonNext">/</button>
          </div>
          <div className="imgBarContainor">
            <div className="imgBar">
              <div className="imgBar2">/</div>
              <div className="imgBar3">/</div>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="bocContainer">
            <div className="boxImg3" />
            <div className="boxText4">
              <p className="text1">Meet our international artists</p>
              <p className="text2">5월의 아티스트, Kris Gebhardt</p>
              <button className="text3">
                <p className="moreButton">작품 더보기</p>
              </button>
            </div>
          </div>
        </div>
        <div className="box4">
          <div className="goodsBox">
            <div className="goodsImg">1</div>
            <div className="goodsImg2">2</div>
            <div className="goodsImg3">3</div>
            <div className="buttonBox2">
              <div className="buttonBox1">
                <button className="buttonPre2">/</button>
              </div>
              <div className="buttonBox">
                <button className="buttonNext2">/</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box5">
        <div className="boxContent5">
          <div className="bocContainer5">
            <div className="boxImg5">3</div>
            <div className="boxFiveText">
              <p className="text1">Coming Up Next</p>
              <p className="text2">
                « 승화시키다, 주제를 전유하다, 본질적인 것만 유지하다. »{" "}
              </p>
              <p className="text3">Sophie Dumont</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
