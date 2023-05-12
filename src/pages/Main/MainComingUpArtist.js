import React from "react";
import "./MainComingUpArtist.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function MainArtistNext() {
  const navigate = useNavigate();

  return (
    <div className="nextArtistContainer">
      <div className="nextBox">
        <div className="nextImgBox">
          <div className="nextArtistImg" />
          <div className="nextArtistText">
            <p className="comingUpText">Coming Up Next</p>
            <p className="firstText">
              « 승화시키다, 주제를 전유하다,
              <p className="secondText">본질적인 것만 유지하다. »</p>
            </p>
            <Button
              className="artistName"
              action={() => {
                navigate("/");
              }}
              buttonSize="mediumButton"
              buttonColor="dark"
            >
              Sophie Dumont
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
