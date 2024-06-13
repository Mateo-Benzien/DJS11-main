// src/components/SeasonList.js
import React from 'react';
import SeasonCard from './SeasonCard';

const SeasonList = ({ seasons }) => {
  return (
    <div className="season-list">
      {seasons.map(season => (
        <SeasonCard key={season.id} season={season} />
      ))}
    </div>
  );
};

export default SeasonList;
