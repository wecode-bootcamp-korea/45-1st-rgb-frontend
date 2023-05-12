import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import MainArtist from "./MainArtist";
import MainComingUpArtist from "./MainComingUpArtist";
import MainCarasol2 from "./MainCarousel2";
import MainCarasol from "./MainCarousel";
import Button from "../../components/Button/Button";
import Video from "./Video";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="wrapper">
        <div className="mainContainer">
          <Video />
          <div className="titleContent">
            <span className="boxText">Artist of May</span>
          </div>
          <div className="boxButton">
            <Button
              action={() => navigate("/artist")}
              buttonSize="mediumButton"
              buttonColor="dark"
            >
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
