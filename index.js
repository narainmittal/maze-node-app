const express = require('express');
const https = require('https');
const http = require('http');
const { generate } = require('./src/generate');
const { solve } = require('./src/solve');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create', function (req, res, next) {
  console.log(`req ${JSON.stringify(req.body)}`);
  const maze = generate(req.body.rows, req.body.cols);
  res.json(maze);
});

app.post('/solve', function (req, res, next) {
  console.log(`req ${JSON.stringify(req.body)}`);
  const solution = solve(req.body);
  res.json(solution);
});

http.createServer(app).listen(80);
https.createServer({}, app).listen(443);