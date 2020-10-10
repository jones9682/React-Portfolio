const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const sendGrid = require('@sendgrid/mail');

const app = express();
const port = 3030;

app.use(bodyParser.json);

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })    