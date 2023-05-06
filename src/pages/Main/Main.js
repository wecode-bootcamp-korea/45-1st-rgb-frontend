import React from "react";
import "./Main.scss";
import MainArtist from "./MainArtist";
import MainArtistNext from "./MainArtistNext";
import MainCarasol2 from "./MainCarousel2";
import MainCarasol from "./MainCarousel";
import Button from "../Button/Button";

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
              <Button buttonSize="mediumButton" buttonColor="dark">
                바로가기
              </Button>
            </div>
          </div>
        </div>
        <MainCarasol />
        <MainArtist />
        <MainCarasol2 />
        <MainArtistNext />
      </div>
    </div>
  );
}
export default Main;
