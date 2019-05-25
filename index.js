const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const cors = require('cors');
const { generate } = require('./src/generate');
const { solve } = require('./src/solve');

const app = express();
const CONTEXT = '/maze';

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.post(CONTEXT + '/create', function (req, res, next) {
  const maze = generate(req.body.rows, req.body.cols);
  res.json(maze);
});

app.post(CONTEXT + '/solve', function (req, res, next) {
  const solution = solve(req.body);
  res.json(solution);
});

http.createServer(app).listen(80);
https.createServer({}, app).listen(443);