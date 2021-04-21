import { IonIcon } from "@ionic/react";
import { NavContext } from "@ionic/react";
import React, { useContext } from "react";

import BackIcon from "../../assets/icons/back.svg";

import "./Back.css";

const Back: React.FC = () => {
  const { goBack } = useContext(NavContext);
  const goToPreviousPage = () => {
    goBack();
  };

  return <IonIcon icon={BackIcon} size="large" className="back" onClick={() => goToPreviousPage()}></IonIcon>;
};

export default Back;
