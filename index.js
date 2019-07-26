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


app.post('/create', async function (req, res, next) {
  const maze = await generate(req.body.rows, req.body.cols);
  res.json(maze);
});

app.post('/solve', async function (req, res, next) {
  const solution = await solve(req.body);
  res.json(solution);
});

// Uncomment below to use ExpressJs server
// http.createServer(app).listen(80);	module.exports = app; 
// https.createServer({}, app).listen(443);
module.exports = app;