import React from "react";

import AddIcon from "../../assets/icons/add.svg";

import "./AddButton.css";

const AddButton: React.FC = () => {
  return (
    <div className="add-button">
      <img src={AddIcon} alt="add item icon"></img>
    </div>
  );
};

export default AddButton;
