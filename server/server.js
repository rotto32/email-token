const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { generateToken } = require('./token-generation.js');

const app = express();
const port = 3000;

// Serves static files (html, bundle.js) from the public directory
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// Parses the body of the request to make it easy to use
app.use(bodyParser.json());

app.post('/token', (req, res)=> {
  console.log(req.body);

});

app.listen(port, () => console.log(`API listening on port ${port}!`));
