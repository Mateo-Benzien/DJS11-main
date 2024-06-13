// src/components/ShowCard.js
import React from 'react';

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.image} alt={show.title} />
      <h3>{show.title}</h3>
      <p>{show.description}</p>
      <p>{show.seasons} Seasons</p>
      <p>Last updated: {new Date(show.updated).toLocaleDateString()}</p>
    </div>
  );
};

export default ShowCard;
