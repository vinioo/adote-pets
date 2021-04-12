import { IonContent, IonPage } from "@ionic/react";

import CardContainer from "../../components/card-container";
import MainNavbar from "../../components/main-navbar";
import Menu from "../../components/menu";
import SetLocation from "../../components/set-location";
import AddButton from '../../components/add-button';

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
          <AddButton redirectState="/register"></AddButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
