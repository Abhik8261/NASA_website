import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loader/Loader'

const BASE_URL = 'http://localhost:5000/api';

const MarsRover = ({mode}) => {
  const [sol, setSol] = useState(1000);
  const [camera, setCamera] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const cameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'MAST', 'CHEMCAM'];

  const fetchMarsPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mars?sol=${sol}&camera=${camera}`);
      setPhotos(response.data.photos);
    } catch (err) {
      console.error('Error fetching Mars photos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarsPhotos();
  }, []);
 if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-4">
     <h2 className="text-center mb-4" style={{ color: mode === 'dark' ? '#ffffff' : '#212529' }}> Mars Rover Photos </h2>
      <div className="row mb-4">
        <div className="col-md-3">
          
          <label className="form-label" style={{ color: mode === 'dark' ? '#ffffff' : '#212529' }}>
Sol (Martian Day)
</label>
          <input
            type="number"
            className="form-control"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label" style={{ color: mode === 'dark' ? '#ffffff' : '#212529' }}>
Camera
</label>
          <select
            className="form-select"
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
          >
            <option value="">All</option>
            {cameras.map((cam) => (
              <option key={cam} value={cam}>{cam}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={fetchMarsPhotos}>
            Fetch Photos
          </button>
        </div>
      </div>

      

      <div className="row">
        {photos.length === 0 && !loading ? (
          <p className="text-center text-muted">No photos found for this sol and camera.</p>
        ) : (
          photos.map((photo) => (
            <div key={photo.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={photo.img_src}
                  alt="Mars"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text text-muted">
                    {photo.camera.full_name} | Sol: {photo.sol}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MarsRover;
