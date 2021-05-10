import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel, NavContext } from "@ionic/react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Formik, Form, FormikProps } from "formik";
import UserService from "../../service/user.service";
import { User } from "../../models/user.model";
import "./Login.css";


var service = UserService;

const Login: React.FC = () => {
  var initialValues: User = {
    uid: "",
    email: "",
    password: "",
    telefone: "",
    imagem: "",
  };
  const { navigate } = useContext(NavContext);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <div className="login__content">
            <h1>Login</h1>
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                  try {
                    const userCredential = await service.login(values.email, values.password);
                    console.log(userCredential.user);

                    navigate("/main");
                  } catch (err) {
                    console.error(err);
                  }
                  actions.setSubmitting(false);
                }}
              >
                {(formikProps:FormikProps<User>) => (
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
            <small className="login__register">
              Não possui conta? <Link to="/registerUser">Cadastre-se</Link> agora!
            </small>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
