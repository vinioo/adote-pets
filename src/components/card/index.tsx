import React from "react";

import './Card.css';

interface ICardProps {
  source?: string;
}

const Card: React.FC<ICardProps> = ({ source }) => {
  return (
    <div className="card">
      {source && <img src={source} alt="pet visualization" />}
      <div className="card__info">
        <span>Doguinho</span>
        <span>3 anos</span>
      </div>
    </div>
  );
};

export default Card;
