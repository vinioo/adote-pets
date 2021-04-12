import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <div className="login__content">
            <h1>Login</h1>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Senha</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <p>Esqueci a senha</p>
            <IonButton expand="block" routerLink="/main">Entrar</IonButton>
            <p>
              Não possui conta? <Link to="/register">Cadastre-se</Link> agora!
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
