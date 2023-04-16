const express = require('express');
const { PORT } = require('./config');

const app = express();
app.set('port', PORT);
module.exports = app;
