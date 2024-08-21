const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle /thiio route
app.use('/thiio', (req, res) => {
    res.send('Hello from random js app :)');
});

// Handle all other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
