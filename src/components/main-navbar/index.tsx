import React from "react";

import "./MainNavbar.css";

const MainNavbar: React.FC = () => {
  return (
    <div className="main-navbar">
      <div className="user-image"></div>
      <img src="menu" alt="open menu" />
    </div>
  );
};

export default MainNavbar;
