const express = require('express');
const actionsRouter = require('./actionsRouter');
const projectsRouter = require('./projectsRouter');

const server = express();

// global middleware
server.use(express.json());

// used to fix cors issue for react application
// maybe install cors?
server.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// router
server.use('/api/projects', projectsRouter, actionsRouter);

server.get('/', (req, res) => {
  res.send('Server is up and running!');
});

module.exports = server;
