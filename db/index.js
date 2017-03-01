'use strict';
var db = require('./_db');

var video = require('./models/video');

db.sync({ force: true })
.then(function(err) {
  console.log('It worked!');
}, function (err) {
  console.log('An error occurred while creating the table:', err);
});

module.exports = db;
