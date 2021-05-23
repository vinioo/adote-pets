import { Ref, useContext } from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  NavContext,
} from "@ionic/react";
import React from "react";
import userService from "../../service/user.service";

const SideMenu = React.forwardRef((_, ref: Ref<HTMLIonMenuElement>) => {
  const { navigate } = useContext(NavContext);

  return (
    <div className="side-menu">
      <IonMenu side="start" menuId="first" ref={ref} content-id="content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="main">
          <IonList>
            <IonItem routerLink="/petsList" button={true}>
              <IonLabel>Animais cadastrados</IonLabel>
            </IonItem>
          </IonList>
          <IonItem
            button={true}
            onClick={() => {
              userService.signOut();
              navigate("/login");
            }}
          >
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonContent>
      </IonMenu>
    </div>
  );
});

export default SideMenu;
