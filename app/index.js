// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const mongo_uri = require('./env.js').config(process.env.NODE_ENV || 'dev')['MONGO_URI'];

// MongoDB
mongoose.connect('mongodb://' + mongo_uri);

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./api'));

var port = 3000;
app.listen(port);
console.log('App running on port ' + port);