const express = require('express');

const app = express();
const PORT = 8001;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Express server is running!');
});

app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});