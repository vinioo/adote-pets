import React from "react";

import "./SetLocation.css";

const SetLocation: React.FC = () => {
  return (
    <div className="set-location">
      <img src="icon" alt="location info"></img>
      <div>
        <span>Local</span>
        <h3>Belo Horizonte, MG</h3>
      </div>
    </div>
  );
};

export default SetLocation;
