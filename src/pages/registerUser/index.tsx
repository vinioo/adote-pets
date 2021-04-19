import {
  IonIcon,
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { arrowBackOutline, add } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import "./RegisterUser.css";
import { UserService } from "../../service/user.service"
import { User } from "../../models/user.model"

var MyFormValues = new UserService();

const RegisterUser: React.FC = () => {
  const initialValues: User = {
    id:0,
    email: "",
    password: "",
    telefone: "",
    imagem:""
  };
  var style_Image_upload = {};
  var style_Icon_upload = {};

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
          <Link to="/login">
            {" "}
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </Link>
          <h1 className="title">Registrar</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => {
              MyFormValues.addUser(values);
              action.setSubmitting(false);
              alert(JSON.stringify(MyFormValues.getUserById(1)))

              console.log(MyFormValues.getUserById(1))
            }}
          >
            {(formikProps) => (
              <Form>
                <div className="image_upload_content">
                  <div className="image_upload" style={style_Image_upload}>
                    <IonIcon
                      icon={add}
                      className="icon"
                      style={style_Icon_upload}
                    ></IonIcon>
                    <input
                      type="file"
                      accept="image/*"
                      className="upload_file"
                      name="imagem"
                      onChange={(e) => {
                        const file = e.target.files
                          ? e.target.files[0]
                          : new Blob();
                        const reader = new FileReader();
                        reader.onload = (ee) => {
                          formikProps.setFieldValue(
                            "imagem",
                            ee.target?.result?.toString()
                          );
                          style_Image_upload = {
                            backgroundImage: `url('${ee.target?.result?.toString()}')`,
                            backgroundZize: "1%",
                          };

                          style_Icon_upload = {
                            display: "none",
                          };
                        };

                        reader.readAsDataURL(file);
                      }}
                    ></input>
                  </div>
                  <small className="image_upload_subtitle">
                    adicionar uma imagem
                  </small>
                </div>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    name="email"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("email", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Senha</IonLabel>
                  <IonInput
                    name="password"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("password", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Confirmação de senha</IonLabel>
                  <IonInput name="confirmarSenha"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Número de telefone</IonLabel>
                  <IonInput
                    name="telefone"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("telefone", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonButton
                  expand="block"
                  className="button"
                  size="large" 
                  type="submit"
                >
                  Cadastrar
                </IonButton>
              </Form>
            )}
          </Formik>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
