import React from "react";
import "./Main.scss";
import MainArtist from "./MainArtist";
import MainComingUpArtist from "./MainComingUpArtist";
import MainCarasol2 from "./MainCarousel2";
import MainCarasol from "./MainCarousel";
import Button from "../../components/Button/Button";

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="mainContainer">
          <div className="content" />
          <div className="titleContent">
            <span className="boxText">Artist of May</span>
          </div>
          <div className="boxButton">
            <Button buttonSize="mediumButton" buttonColor="dark">
              바로가기
            </Button>
          </div>
        </div>
      </div>
      <MainCarasol />
      <MainArtist />
      <MainCarasol2 />
      <MainComingUpArtist />
    </div>
  );
}
export default Main;
