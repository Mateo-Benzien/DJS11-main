// src/components/ShowDetail.js
import React, { useState, useEffect } from 'react';
import { fetchShow } from '../apiService';
import SeasonList from './SeasonList';

const ShowDetail = ({ match }) => {
  const { id } = match.params;
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchShow(id);
      setShow(data);
      setLoading(false);
    };
    getData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-detail">
      <h2>{show.title}</h2>
      <img src={show.image} alt={show.title} />
      <p>{show.description}</p>
      <SeasonList seasons={show.seasons} />
    </div>
  );
};

export default ShowDetail;
