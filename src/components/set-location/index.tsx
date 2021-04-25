import { IonGrid, IonIcon } from "@ionic/react";
import React from "react";

import LocationIcon from "../../assets/icons/location.svg";

import "./SetLocation.css";

const SetLocation: React.FC = () => {
  return (
    <IonGrid className="set-location">
      <IonIcon icon={LocationIcon}></IonIcon>
      <div>
        <span>Local</span>
        <h3>
          <span>Belo Horizonte</span>, MG
        </h3>
      </div>
    </IonGrid>
  );
};

export default SetLocation;
