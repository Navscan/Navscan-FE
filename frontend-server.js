const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/status', (req, res) => {
    res.json({ status: 'Frontend server running', port: PORT });
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
