const express = require('express');

const chatRoute = require('./routes/dockerRoute');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use('/', chatRoute);

module.exports = app;
