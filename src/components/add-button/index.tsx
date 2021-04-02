import React from "react";
import { Link } from "react-router-dom";

import AddIcon from "../../assets/icons/add.svg";

import "./AddButton.css";

interface IAddButtonProps {
  redirectState: string;
}

const AddButton: React.FC<IAddButtonProps> = ({ redirectState }) => {
  return (
    <Link to={redirectState}>
      <div className="add-button">
        <img src={AddIcon} alt="add item icon"></img>
      </div>
    </Link>
  );
};

export default AddButton;
