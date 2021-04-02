import React from "react";

import './MenuItem.css';

interface IMenuItemProps {
  description: string;
  source?: string;
  active?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({ source, description, active = false}) => {
  return (
    <div className={`menu-item ${active && 'menu-item--active'}`}>
      <div>
        <img src={source} alt="menu item"></img>
      </div>
      <span>{description}</span>
    </div>
  );
};

export default MenuItem;
