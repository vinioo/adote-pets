import React from "react";

import MenuItem from "../menu-item";

import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </div>
  );
};

export default Menu;
