import React, { useEffect, useState } from "react";
import { Pet } from "../../models/pet.model";
import petService from "../../service/pet.service";
import Card from "../card";

import "./CardContainer.css";

interface ICardContainerProps {}

const CardContainer: React.FC<ICardContainerProps> = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const getPets = async () => {
      setPets(await petService.getAllPets());
    };
    getPets();
  }, []);
  return (
    <div className="card-container">
      {pets.map((pet, key) => (
        <Card key={key} name={pet.nome} age={pet.idade} source={pet.imagem}></Card>
      ))}
    </div>
  );
};

export default CardContainer;
