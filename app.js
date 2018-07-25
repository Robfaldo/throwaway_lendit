'use strict';
const express = require('express');
const app = express();
// this returns the current path directory (e.g. Users/robertfaldo/Documents/Makers/Lendit)
const path = require('path');

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// Goes below the app = express (per above link) this code creates the default connection
// to the database and binds to the error event (so that errors will be printed to the console).
var mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'lendit-dev';
// connect to the right database (testing/prod/development)
var mongoDB = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_Password}@ds247001.mlab.com:47001/${env}`
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api/hello', (req, res) => {
    res.json("Hello, World numero dos!");
    console.log("another test");
});

// this line is only getting called when you're using localhost:5000
app.get('*', (req, res) => {
    // this is the wrong filename - it should be client/public/index.html
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    console.log("This is happening")
});

const port = process.env.PORT || 5000;
app.listen(port);

// our express app will be used by other parts of program, e.g. tests
module.exports = app;
