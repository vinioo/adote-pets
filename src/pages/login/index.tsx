import { IonContent, IonPage, IonButton, IonInput, IonList, IonItem, IonLabel } from "@ionic/react";

import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="login__container">
          <div className="login__content">
            <IonList>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <p>Esqueci a senha</p>
            </IonList>
            <IonButton expand="block">Entrar</IonButton>
            <p>Não possui conta? Cadastre-se agora!</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
