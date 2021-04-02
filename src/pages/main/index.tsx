import { IonContent, IonPage } from "@ionic/react";

import CardContainer from "../../components/card-container";
import MainNavbar from "../../components/main-navbar";
import Menu from "../../components/menu";
import SetLocation from "../../components/set-location";

import "./Main.css";

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
          <MainNavbar></MainNavbar>
          <SetLocation></SetLocation>
          <Menu></Menu>
          <CardContainer></CardContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
