import React from "react";

import MenuItem from "../menu-item";

import DogIcon from "../../assets/icons/dog.svg";
import CatIcon from "../../assets/icons/cat.svg";
import MoreIcon from "../../assets/icons/more.svg";
import FilterIcon from "../../assets/icons/filter.svg";

import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <MenuItem description="Cachorros" source={DogIcon} active={true}></MenuItem>
      <MenuItem description="Gatos" source={CatIcon}></MenuItem>
      <MenuItem description="Outros" source={MoreIcon}></MenuItem>
      <MenuItem description="Filtros" source={FilterIcon}></MenuItem>
    </div>
  );
};

export default Menu;
