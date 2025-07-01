const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { start_date, end_date } = req.query;

  try {
    const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
      params: {
        start_date,
        end_date,
        api_key: process.env.NASA_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('NEO API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});

module.exports = router;
