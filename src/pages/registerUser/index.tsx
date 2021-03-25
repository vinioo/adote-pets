import {IonIcon, IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { arrowBackOutline,add } from 'ionicons/icons';
import { Link } from "react-router-dom";


import "./RegisterUser.css";

const RegisterUser: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
        <Link to="/main">   <IonIcon icon={arrowBackOutline}></IonIcon></Link>
        <h1 className="title">Registrar</h1>
          <div className="image_upload_content">
            <div className="image_upload">
              <IonIcon icon={add} className="icon"></IonIcon>
            </div>
            <p className="image_upload_subtitle">adicionar uma imagem</p>
          </div>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirmação de senha</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Número de telefone</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton expand="block" className="button">
            Cadastrar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
