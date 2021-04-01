import React from "react";

import './MenuItem.css';

interface IMenuItemProps {
  source?: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ source }) => {
  return (
    <div className="menu-item">
      <div>
        <img src={source} alt="menu item"></img>
      </div>
      <span>Cachorros</span>
    </div>
  );
};

export default MenuItem;
