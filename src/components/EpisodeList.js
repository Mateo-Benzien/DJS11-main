// src/components/EpisodeList.js
import React from 'react';
import EpisodeCard from '../EpisodeCard';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="episode-list">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
