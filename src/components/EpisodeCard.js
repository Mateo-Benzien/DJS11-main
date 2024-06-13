// src/components/EpisodeCard.js
import React from 'react';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="episode-card">
      <h4>{episode.title}</h4>
      <audio controls>
        <source src={episode.file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodeCard;
