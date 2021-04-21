import React from "react";

import "./MenuItem.css";

interface IMenuItemProps {
  description: string;
  source?: string;
  selected?: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({ source, description, selected, onClick }) => {
  return (
    <div onClick={onClick} className={`menu-item ${selected ? "menu-item--selected" : ""}`}>
      <div>
        <img src={source} alt="menu item"></img>
      </div>
      <span>{description}</span>
    </div>
  );
};

export default MenuItem;
