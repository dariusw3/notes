import React from "react";
import GoogleAuth from "../GoogleAuth";
import "../Styles.css";
import img3 from "../img/doodle-2 1.png";
import img1 from "../img/Saly-25.svg";
import img2 from "../img/Saly-26.svg";

function Landing() {
  return (
    <div className="main-container trans-y">
      <img
        className="hand-img animation-float-hand"
        src={img1}
        alt="this is an image of a hand"
      />
      <img
        className="note-img animation-float-note"
        src={img2}
        alt="this is an image of a notepad"
      />

      <h1 className="main-text animation-fade-in">Take notes</h1>
      <p className="main-p animation-fade-in">
        sign in to stat taking <br /> notes
      </p>
      <div className="centreaza">
        <GoogleAuth changeClass="ui google button buton-main" />
      </div>
    </div>
  );
}

export default Landing;
