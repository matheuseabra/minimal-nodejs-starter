/* eslint-disable no-console */
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const dbConnection = mongoose
  .connect(URL, mongoConfig)
  .then(() => console.log('Database connection started'));

module.exports = { dbConnection, mongoConfig };
