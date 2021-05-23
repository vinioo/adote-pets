import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from "./pages/main";
import RegisterUser from "./pages/registerUser";
import PetsList from "./pages/petsList";
import PetInfo from "./pages/pet-info";
import Location from "./pages/location";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Customized css */
import "./theme/custom.css";
import ProtectedRoute from "./ProtectedRoute";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/register">
          <Register />
        </ProtectedRoute>
        <Route exact path="/registerUser">
          <RegisterUser />
        </Route>
        <ProtectedRoute path="/main">
          <Main />
        </ProtectedRoute>
        <ProtectedRoute path="/info">
          <PetInfo />
        </ProtectedRoute>
        <ProtectedRoute path="/petsList">
          <PetsList />
        </ProtectedRoute>
        <ProtectedRoute path="/location">
          <Location />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
