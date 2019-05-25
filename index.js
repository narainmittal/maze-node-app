const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
// const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const { generate } = require('./src/generate');
const { solve } = require('./src/solve');

const app = express();

app.use(helmet())
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));


app.post('/create', function (req, res, next) {
  const maze = generate(req.body.rows, req.body.cols);
  res.json(maze);
});

app.post('/solve', function (req, res, next) {
  const solution = solve(req.body);
  res.json(solution);
});

module.exports = app;