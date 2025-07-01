import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Loading from'../Loader/Loader'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BASE_URL = 'http://localhost:5000/api';

const NeoViewer = ({ mode }) => {
  const [startDate, setStartDate] = useState('2024-05-01');
  const [endDate, setEndDate] = useState('2024-05-03');
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [objectList, setObjectList] = useState([]);

  const fetchNeoData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/neo?start_date=${startDate}&end_date=${endDate}`);
      const neoData = response.data.near_earth_objects;

      const labels = Object.keys(neoData);
      const values = labels.map((date) => neoData[date].length);
      const flatList = labels.flatMap((date) => neoData[date]);

      setObjectList(flatList);
      setChartData({
        labels,
        datasets: [
          {
            label: 'NEOs per Day',
            data: values,
            backgroundColor: '#198754',
          },
        ],
      });
    } catch (err) {
      console.error('Error fetching NEO data:', err);
    } finally {
      setLoading(false);
    }
  };
   if (loading) {
    return <Loading />;
  }
  const textColor = mode === 'dark' ? 'text-light' : 'text-dark';
  const bgColor = mode === 'dark' ? 'bg-dark' : 'bg-light';

  return (
    <div className={`container py-4 ${bgColor} ${textColor}`} style={{ minHeight: '100vh' }}>
      <h2 className="text-center mb-4">Near-Earth Objects Feed</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <label className={`form-label ${textColor}`}>Start Date</label>
          <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className={`form-label ${textColor}`}>End Date</label>
          <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-success w-100" onClick={fetchNeoData}>Fetch NEOs</button>
        </div>
      </div>

   

      {chartData && (
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Asteroids Per Day</h5>
            <Bar data={chartData} />
          </div>
        </div>
      )}

      {objectList.length > 0 && (
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Asteroid Details</h5>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Speed (km/h)</th>
                    <th>Miss Distance (km)</th>
                    <th>Diameter (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {objectList.map((obj) => (
                    <tr key={obj.id}>
                      <td>{obj.name}</td>
                      <td>{parseFloat(obj.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)}</td>
                      <td>{parseFloat(obj.close_approach_data[0].miss_distance.kilometers).toFixed(2)}</td>
                      <td>{parseFloat(obj.estimated_diameter.meters.estimated_diameter_max).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeoViewer;
