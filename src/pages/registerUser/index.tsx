import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel, NavContext } from "@ionic/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./RegisterUser.css";
import UserService from "../../service/user.service";
import { User } from "../../models/user.model";
import Back from "../../components/back";
import ImageUpload from "../../components/image-upload";
import { useContext } from "react";

var service = UserService;

const RegisterUser: React.FC = () => {
const { navigate } = useContext(NavContext);

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
      try {
        const userCredential = await service.registerUser(values.email, values.password);
        if (userCredential.user) {
          service.addUser({ ...values, uid: userCredential.user.uid });
        }
        navigate('/main');
      } catch (err) {
        console.log("error tring to create user", err);
      }
    },
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
          <Link to="/login">
            {" "}
            <Back></Back>
          </Link>
          <h1 className="title">Registrar</h1>
          <form onSubmit={formik.handleSubmit}>
            <ImageUpload onImageUploaded={(img) => formik.setFieldValue("image", img)}></ImageUpload>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                name="email"
                onIonChange={(e) => {
                  formik.setFieldValue("email", e.detail.value);
                }}
              ></IonInput>
            </IonItem>
            {formik.touched.email && formik.errors.email ? (
              <small className="error">{formik.errors.email}</small>
            ) : null}
            <IonItem>
              <IonLabel position="floating">Senha</IonLabel>
              <IonInput
                name="password"
                type="password"
                onIonChange={(e) => {
                  formik.setFieldValue("password", e.detail.value);
                }}
              ></IonInput>
            </IonItem>
            {formik.touched.password && formik.errors.password ? (
              <small className="error">{formik.errors.password}</small>
            ) : null}
            <IonItem>
              <IonLabel position="floating">Confirmação de senha</IonLabel>
              <IonInput name="confirmarSenha" type="password"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Número de telefone</IonLabel>
              <IonInput
                name="telefone"
                onIonChange={(e) => {
                  formik.setFieldValue("telefone", e.detail.value);
                }}
              ></IonInput>
            </IonItem>
            {formik.touched.telefone && formik.errors.telefone ? (
              <small className="error">{formik.errors.telefone}</small>
            ) : null}
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
