import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Card.css";
import { NavContext } from "@ionic/react";

interface ICardProps {
  source: string;
  name: string;
  age: string;
}

const Card: React.FC<ICardProps> = ({ name, age, source }) => {
  const { navigate } = useContext(NavContext);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current != null) {
      const gradient = "linear-gradient(186.55deg, rgba(232, 232, 232, 0) 5.15%, #333333 119.04%)";
      cardRef.current.style.background = `${gradient}, url(${source}) no-repeat`;
      cardRef.current.style.backgroundSize = "cover";
      cardRef.current.style.backgroundPosition = "center";
    }
  }, [source]);

  const goToPetInfoPage = () => {
    navigate("/info");
  };

  return (
    <div className="card" ref={cardRef} onClick={() => goToPetInfoPage()}>
      <div className="card__info">
        <span>{name}</span>
        <small>{age} anos</small>
      </div>
    </div>
  );
};

export default Card;
