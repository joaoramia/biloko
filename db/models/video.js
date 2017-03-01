'use strict';
var db = require('../_db.js');
var Sequelize = require('sequelize');

var video = db.define('video', {
    views: {
        type: Sequelize.INTEGER,
        min: 0,
        allowNull: false
    },
    videoId: {
        type:Sequelize.STRING,
        allowNull: false
    }
  },
  {
    hooks: {
        beforeUpdate: function (video) {
          video.views++;
        },
        beforeCreate: function (video) {
          video.views = 0;
        }
    }
});

module.exports = video;
