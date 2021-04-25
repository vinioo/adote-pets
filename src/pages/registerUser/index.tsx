import { IonIcon, IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { arrowBackOutline, add } from "ionicons/icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./RegisterUser.css";
import UserService from "../../service/user.service";
import { User } from "../../models/user.model";

var service = UserService;

const RegisterUser: React.FC = () => {
  const formik = useFormik<Omit<User, "uid">>({
    initialValues: {
      email: "",
      password: "",
      telefone: "",
      imagem: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("O email informado não é valido").required(),
      password: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required(),
      telefone: Yup.string(),
      imagem: Yup.string(),
    }),

    onSubmit: async (values) => {
      console.log("submite");
      try {
        const userCredential = await service.registerUser(values.email, values.password);
        if (userCredential.user) {
          service.addUser({ ...values, uid: userCredential.user.uid });
        }
      } catch (err) {
        console.log("error tring to create user", err);
      }
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div className="image_upload_content">
              <div className="image_upload" style={style_Image_upload}>
                <IonIcon icon={add} className="icon" style={style_Icon_upload}></IonIcon>
                <input
                  type="file"
                  accept="image/*"
                  className="upload_file"
                  name="imagem"
                  onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : new Blob();
                    const reader = new FileReader();
                    reader.onload = (ee) => {
                      formik.setFieldValue("imagem", ee.target?.result?.toString());
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
              <small className="image_upload_subtitle">adicionar uma imagem</small>
            </div>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                name="email"
                onIonChange={(e) => {
                  formik.setFieldValue("email", e.detail.value);
                }}
              ></IonInput>
              {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Senha</IonLabel>
              <IonInput
                name="password"
                onIonChange={(e) => {
                  formik.setFieldValue("password", e.detail.value);
                }}
              ></IonInput>
              {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
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
                  formik.setFieldValue("telefone", e.detail.value);
                }}
              ></IonInput>
              {formik.touched.telefone && formik.errors.telefone ? <div>{formik.errors.telefone}</div> : null}
            </IonItem>
            <IonButton expand="block" className="button" size="large" type="submit">
              Cadastrar
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
