const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`Server is running on Port ${process.env.PORT || 8000}`);
});

app.post('/api/data', (req, res) => {
    const bodyData = req.body;
    console.log(bodyData);
    
    res.status(200).send('Data received and logged.');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
