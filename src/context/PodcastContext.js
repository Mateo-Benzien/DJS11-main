// src/context/PodcastContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchPreviews } from '../apiService';

export const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPreviews();
      setShows(data.sort((a, b) => a.title.localeCompare(b.title)));
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <PodcastContext.Provider value={{ shows, loading }}>
      {children}
    </PodcastContext.Provider>
  );
};
