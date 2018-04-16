// my server.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const jsonpatch = require('jsonpatch');

const app = express();

const port = 8000;

app.get('/login', (req, res) => {
  let token = jwt.sign(user);
  res.json(token);
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
