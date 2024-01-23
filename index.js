
// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a simple GET route
app.get('/', (req, res) => {
  console.log('req came')
  res.send('Hello, from express Express! 3000 ');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
