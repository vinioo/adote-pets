import React, { useEffect, useRef } from "react";
import axios from "axios";

import "./Card.css";

interface ICardProps {
  source?: string;
}

const Card: React.FC<ICardProps> = ({ source }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getDogImage = async () => {
      const {
        data: { message: dogImage },
      } = await axios.get("https://dog.ceo/api/breeds/image/random");
      
      if (cardRef.current != null) {
        const gradient = "linear-gradient(186.55deg, rgba(232, 232, 232, 0) 5.15%, #333333 119.04%)";
        cardRef.current.style.background = `${gradient}, url(${dogImage}) no-repeat`;
        cardRef.current.style.backgroundSize = "cover";
        cardRef.current.style.backgroundPosition = "center";
      }
    };

    getDogImage();
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="card__info">
        <span>Doguinho</span>
        <small>3 anos</small>
      </div>
    </div>
  );
};

export default Card;
