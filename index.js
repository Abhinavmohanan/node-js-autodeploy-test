// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Define a port
const port = 80;

// Define a basic route
app.get('/', (req, res) => {
    res.send('Test server for auto-deploy');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});