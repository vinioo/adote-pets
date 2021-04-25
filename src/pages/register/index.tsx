import {
  IonIcon,
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonImg,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { add, arrowBackOutline } from "ionicons/icons";
import { Formik, Form } from "formik";

import "./Register.css";
import { Pet} from "../../models/pet.model"
import PetService from "../../service/pet.service"
 
var service =  PetService;

const Register: React.FC = () => {
  const initialValues: Pet = {
    id: '',
    tipoAnimal: "",
    nome: "",
    idade: '0',
    imagem: "",
  };

  var style_Image_upload = {};
  var style_Icon_upload = {};

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
          <Link to="/main">
            {" "}
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </Link>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => {
              service.addPet(values);
              action.setSubmitting(false);
              alert(JSON.stringify(service.getPetById(1)))

              console.log(service.getPetById(1))
            }}
          >
            {(formikProps) => (
              <Form>
                <div className="image_upload_content">
                  <div className="image_upload" style={style_Image_upload}>
                    <IonIcon icon={add} className="icon" style={style_Icon_upload}></IonIcon>
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
                  <IonLabel position="floating">Tipo de animal</IonLabel>
                  <IonInput
                    name="tipoAnimal"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("tipoAnimal", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Nome</IonLabel>
                  <IonInput
                    name="nome"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("nome", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Idade</IonLabel>
                  <IonInput
                    name="idade"
                    onIonChange={(e) => {
                      formikProps.setFieldValue("idade", e.detail.value);
                    }}
                  ></IonInput>
                </IonItem>
                <IonButton
                  expand="block"
                  className="button"
                  size="large"
                  type="submit"
                >
                  Colocar para adoção
                </IonButton>
              </Form>
            )}
          </Formik>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
