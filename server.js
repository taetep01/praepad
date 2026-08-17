const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from root directory
app.use(express.static(path.join(__dirname, '.'), {
  etag: true,
  maxAge: '1h'
}));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback for SPA/routing
app.get('*', (req, res) => {
  const requestedPath = path.join(__dirname, req.path);
  res.sendFile(requestedPath, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
