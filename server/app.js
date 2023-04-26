const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

const cookieParse = require('cookie-parser');
const { join } = require('path');
const { PORT } = require('./config');
const router = require('./routes/router');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.disabled('x-powered-by');
app.use(cookieParse());
app.use(express.static(join(__dirname, '..', 'frontend')));
app.use(router);
app.set('port', PORT);
module.exports = app;
