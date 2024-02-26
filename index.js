// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Define a port
const port = 80;

// Define a basic route
app.get('/:host', (req, res) => {

    res.send('Host is ' + req.params.host);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});