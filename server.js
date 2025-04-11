const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like MP3, CSS, images)
app.use(express.static(path.join(__dirname)));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`RossxMusic server is live → http://localhost:${PORT}`);
});
