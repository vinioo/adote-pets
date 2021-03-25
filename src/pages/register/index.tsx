import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <div className="register__content">
            <h1>Registrar</h1>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Senha</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonButton expand="block">Cadastrar</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
