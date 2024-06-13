// src/components/ShowList.js
import React, { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext';
import ShowCard from '../ShowCard';

const ShowList = () => {
  const { shows, loading } = useContext(PodcastContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-list">
      {shows.map(show => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
