import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import "./Login.css";

interface MyFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <div className="login__content">
            <h1>Login</h1>
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
              >
                {(formikProps) => (
                  <Form>
                    <IonItem>
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        name="email"
                        onIonChange={(e) => formikProps.setFieldValue("email", e.detail.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Senha</IonLabel>
                      <IonInput
                        name="password"
                        type="password"
                        onIonChange={(e) => formikProps.setFieldValue("password", e.detail.value)}
                      ></IonInput>
                    </IonItem>
                    <small>Esqueci a senha</small>
                    <IonButton expand="block" size="large" type="submit">
                      Entrar
                    </IonButton>
                  </Form>
                )}
              </Formik>
            </div>
            <small>
              Não possui conta? <Link to="/registerUser">Cadastre-se</Link> agora!
            </small>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
