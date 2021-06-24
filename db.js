const mongoose = require('mongoose');

const MONGO_USERNAME = 'andre';
const MONGO_PASSWORD = '1Duke1Echo';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '5000';
const MONGO_DB = 'blog-one';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});