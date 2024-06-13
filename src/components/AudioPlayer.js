// src/components/AudioPlayer.js
import React from 'react';

const AudioPlayer = ({ src }) => {
  return (
    <div className="audio-player">
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
