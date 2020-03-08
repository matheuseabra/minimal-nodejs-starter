require('dotenv/config');
require('../database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');

const api = express();

api.use(express.json());
api.use(cors());
api.use(logger('dev'));
api.use(routes);
api.use(errorHandler);

module.exports = api;
