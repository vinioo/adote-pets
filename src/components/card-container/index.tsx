import React from "react";
import Card from "../card";

import "./CardContainer.css";

interface ICardContainerProps {}

const CardContainer: React.FC<ICardContainerProps> = () => {
  return (
    <div className="card-container">
      <Card nome="dkasjsadosdaio"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default CardContainer;
