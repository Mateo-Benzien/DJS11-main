// src/components/SeasonCard.js
import React from 'react';

const SeasonCard = ({ season }) => {
  return (
    <div className="season-card">
      <img src={season.image} alt={season.title} />
      <h3>{season.title}</h3>
      <p>{season.episodes.length} Episodes</p>
    </div>
  );
};

export default SeasonCard;
