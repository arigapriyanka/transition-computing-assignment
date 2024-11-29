const express = require('express');
const axios = require('axios');
const checklistRules = require('../config/checklistRules');

const router = express.Router();

router.get('/evaluate', async (req, res) => {
  try {
    // Fetch data from the API
    const { data } = await axios.get(
      'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639'
    );

    // Evaluate rules
    const results = checklistRules.map((rule) => ({
        id : rule.id,
      rule: rule.name,
      status: rule.condition(data) ? 'Passed' : 'Failed',
    }));

    // Send results as JSON
    res.json(results);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
