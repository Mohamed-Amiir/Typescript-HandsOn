import express from 'express';

const app = express();
const port = 3000;

//.env file
require('dotenv').config();


app.get('/', (_req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});