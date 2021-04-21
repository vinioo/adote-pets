import React, { useState } from "react";

import MenuItem from "../menu-item";

import DogIcon from "../../assets/icons/dog.svg";
import CatIcon from "../../assets/icons/cat.svg";
import MoreIcon from "../../assets/icons/more.svg";
import FilterIcon from "../../assets/icons/filter.svg";

import "./Menu.css";

const Menu: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Cachorros');

  const menuItems = [
    {
      description: "Cachorros",
      source: DogIcon,
    },
    {
      description: "Gatos",
      source: CatIcon,
    },
    {
      description: "Outros",
      source: MoreIcon,
    },
    {
      description: "Filtros",
      source: FilterIcon,
    },
  ];

  const setActiveItem = (description: string) => {
    setSelectedMenuItem(description);
  };

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem
          key={item.description}
          description={item.description}
          source={item.source}
          selected={item?.description === selectedMenuItem}
          onClick={() => setActiveItem(item.description)}
        ></MenuItem>
      ))}
    </div>
  );
};

export default Menu;
