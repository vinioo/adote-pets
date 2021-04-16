import { IonButton, IonContent, IonPage } from "@ionic/react";
import React from "react";

import Back from "../../components/back";

import "./PetInfo.css";

const PetInfo: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="info">
          <div className="info__image">
            <Back></Back>
          </div>
          <div className="info__content">
            <div className="info__content__pet">
              <div className="info__content__pet--left">
                <h3>Doguinho</h3>
                <span>Cachorro</span>
              </div>
              <div className="info__content__pet--right">
                <span>4 meses</span>
                <span>macho</span>
              </div>
            </div>
            <div className="info__content__user">
              <div className="info__content__user__description">
                <div className="info__content__user__description__image"></div>
                <h3>Josiane silva</h3>
                <div className="info__content__user__description__distance">
                  <p>2.5km</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, molestiae. Unde, exercitationem. Aliquam
                quis omnis veniam quas illum optio quo, voluptas architecto eos esse. Amet eius rem voluptates minus
                pariatur!
              </p>
              <IonButton expand="block">Entrar em contato</IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetInfo;
