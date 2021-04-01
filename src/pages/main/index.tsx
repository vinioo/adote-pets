import { IonContent, IonPage } from "@ionic/react";

import Card from "../../components/card";
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
          <Card></Card>
          <Card></Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
