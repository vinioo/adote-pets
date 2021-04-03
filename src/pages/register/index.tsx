import {
  IonIcon,
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { add, arrowBackOutline } from "ionicons/icons";

import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
        <Link to="/main">   <IonIcon icon={arrowBackOutline}></IonIcon></Link>
          <div className="image_upload_content">
            <div className="image_upload">
              <IonIcon icon={add} className="icon"></IonIcon>
            </div>
            <small className="image_upload_subtitle">adicionar uma imagem</small>
          </div>
          <IonItem>
            <IonLabel position="floating">Tipo de animal</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Idade</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton expand="block" className="button">
            Colocar para adoção
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
