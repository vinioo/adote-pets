import { IonButton, IonContent, IonPage, IonList, IonText, IonIcon, NavContext } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from "../../components/back";
import { Pet } from "../../models/pet.model";
import petService from "../../service/pet.service";
import { pencilOutline } from "ionicons/icons";

import "./PetsList.css";

const PetsList: React.FC = () => {
  const { navigate } = useContext(NavContext);
  const [pets, setPets] = useState<Pet[]>([]); //pets -> todos os valores da requisição

  useEffect(() => { //roda toda vez que o componente inicia 
    const getPets = async () => {
      setPets(await petService.getAllPets());
    };
    getPets();
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container_main">
          <Link to="/main">
            {" "}
            <Back></Back>
          </Link>
          <h1 className="_title">Animais cadastrados</h1>
          <IonList>
            {pets.map((pet, key) => ( //for each faz loop nos emelmentos do array - key é o indice
              <div className="petsList_list" key={key}>
                <div>
                  <img className="petsList_img" src={pet.imagem} alt='petimage' />
                  <IonText>{pet.nome}</IonText>
                </div>
                <IonIcon icon={pencilOutline} onClick={() => navigate('/register')}></IonIcon>
              </div>
            ))}
          </IonList>
          <IonButton expand="block" routerLink="/register">
            Adicionar novo animal
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetsList;