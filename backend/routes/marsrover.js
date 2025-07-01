const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { sol, camera } = req.query;

  try {
    const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        sol,
        camera: camera || undefined,
        api_key: process.env.NASA_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Mars API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch Mars photos' });
  }
});

module.exports = router;
