// my server.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const jsonpatch = require('jsonpatch');
 const key = require('./key');
const middlewares = require('./middlewares');

const fs = require('fs');
const app = express();

app.use('/img', express.static('img'));
app.set('view engine', 'ejs');

const port = 8000;

app.get('/login', (req, res) => {
  const user = req.query;
  let token = jwt.sign(user);
  localStorage.setItem('jwttoken', token);
  res.json(token);
});


app.get('*', (req, res) => {
  res.render('error');
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
