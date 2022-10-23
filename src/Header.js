import React from "react";
import "./Header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from "@material-ui/icons";
import huluLogo from "./assets/img/huluLogo.png";

function Header() {
  return (
    // BEM naming class
    <div className="header">
      <div className="header_icons">
        <div className="header_icon header_icon--active">
          <Home />
          <p>Home</p>
        </div>

        <div className="header_icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header_icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header_icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header_icon">
          <PersonOutline />
          <p>Account</p>
        </div>
        {/* All icons here... */}
      </div>
      <img src={huluLogo} alt="logo" />
    </div>
  );
}

export default Header;
