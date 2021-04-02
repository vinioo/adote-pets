import React from "react";

import LocationIcon from "../../assets/icons/location.svg";

import "./SetLocation.css";

const SetLocation: React.FC = () => {
  return (
    <div className="set-location">
      <img src={LocationIcon} alt="location info"></img>
      <div>
        <span>Local</span>
        <h3>
          <span>Belo Horizonte</span>, MG
        </h3>
      </div>
    </div>
  );
};

export default SetLocation;
