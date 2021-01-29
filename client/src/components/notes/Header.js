import React from "react";
import GoogleAuth from "../GoogleAuth";
import "../Styles.css";
import profileImg from "../img/Group 28.png";
import img1 from "../img/Saly-26.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="test header-container">
      <Link to="/">
        <div className="logo-container"></div>
      </Link>
      <input
        className="searchBar"
        type="text"
        // placeholder="search for a keyword"
      ></input>

      <div className="header-group">
        <GoogleAuth changeClass="ui google button buton-head" />
        <img className="profileImg" src={profileImg}></img>
      </div>
    </div>
  );
};

export default Header;
