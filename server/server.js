const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const generateToken = require('./tokenGeneration.js');
const addTokenToDB = require('../db/dbConnection.js');

const app = express();
const port = 3000;

// Serves static files (html, bundle.js) from the public directory
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// Parses the body of the request to make it easy to use
app.use(bodyParser.json());

app.post('/token', (req, res) => {
  const email = req.body.email;
  generateToken.generateToken(email, (token) => {
    addTokenToDB.addTokenToDB(email, token, (err) => {
      if (err) {
        console.log(err);
        res.status('500').end();
      } else {
        res.status('201').send(token);
      }
    });
  });
});

app.listen(port, () => console.log(`API listening on port ${port}!`));
