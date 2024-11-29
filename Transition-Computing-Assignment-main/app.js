const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
