const mongoose = require('mongoose');

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'db';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));