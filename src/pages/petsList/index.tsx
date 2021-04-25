import { IonButton, IonContent, IonPage, IonIcon, IonList, IonItem, IonLabel, IonText } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons";

import "./PetsList.css";

const PetsList: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
            <Link to="/main">   <IonIcon icon={arrowBackOutline}></IonIcon></Link>
            <h1 className="_title">Animais cadastrados</h1>

          <IonButton expand="block" routerLink="/register">
            Adicionar novo animal
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetsList;