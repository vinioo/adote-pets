import { IonContent, IonPage, IonButton } from "@ionic/react";

import HomeDogsImage from "../../assets/images/dogs.svg";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home__container">
          <div className="home__content">
            <img src={HomeDogsImage} alt="" />
            <div>
              <h1>O seu novo melhor amigo está aqui</h1>
              <p>Vários animais estão procurando um lar. Adote um animal de estimação agora mesmo!</p>
            </div>
            <IonButton expand="block" routerLink="/login">Começar</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
