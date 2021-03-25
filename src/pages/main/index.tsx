import { IonContent, IonPage } from "@ionic/react";

import "./Main.css";

const Main: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <h1>Main page</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
