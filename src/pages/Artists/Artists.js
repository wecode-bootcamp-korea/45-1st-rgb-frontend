import React from "react";
import "./Artists.scss";
import ArtistProfile from "./ArtistProfile";

const Artists = () => {
  return (
    <div className="artists">
      <div className="wrap">
        <div className="leftSide" />
        <div className="rightSide">
          <ArtistProfile />
        </div>
      </div>
    </div>
  );
};
export default Artists;
