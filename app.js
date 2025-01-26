const express = require('express');
const app = express();
const port = 3000;

// Example route
app.get('/', (req, res) => res.send('Hello from Node.js App!'));

// Prometheus metrics endpoint (if using Prometheus)
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}`));
