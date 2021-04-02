import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./PetInfo.css";

const PetInfo: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="info">
          <div className="info__image"></div>
          <div className="info__content">
            teste
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetInfo;
