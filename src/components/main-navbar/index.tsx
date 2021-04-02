import React from "react";

import MenuIcon from "../../assets/icons/menu.svg";

import "./MainNavbar.css";

const MainNavbar: React.FC = () => {
  return (
    <div className="main-navbar">
      <div className="user-image"></div>
      <img src={MenuIcon} alt="open menu" />
    </div>
  );
};

export default MainNavbar;
