import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loader/Loader'
const BASE_URL = 'http://localhost:5000/api';

const ApodViewer = ({ date }) => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchApodData = async (date) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/apod?date=${date}`);
      setApod(response.data);
    } catch (err) {
      setError('Could not fetch APOD data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApodData(date);
  }, [date]);

  if (loading) {
    return <Loading />;
  }
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
        {apod.media_type === 'image' ? (
          <img src={apod.url} className="card-img-top" alt={apod.title} />
        ) : (
          <div className="overflow-hidden" style={{ maxHeight: '400px' }}>
  <img
    src={apod.url}
    className="card-img-top"
    alt={apod.title}
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
</div>
        )}
        <div className="card-body">
          <h5 className="card-title text-primary">{apod.title}</h5>
          <p className="card-subtitle mb-2 text-muted">{apod.date}</p>
          <p className="card-text">{apod.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ApodViewer;
