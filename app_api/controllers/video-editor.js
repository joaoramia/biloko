var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwtDecode = require('jwt-decode');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
var User = mongoose.model('User');
var Video = mongoose.model('Video');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.add = function(req, res) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
      token = jwtDecode(token);
  } else {
      // if there is no token
      // return an error
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
  }

  var user;

  // If no user ID exists in the JWT return a 401
  if (!token._id) {
      res.status(401).json({
        "message" : "UnauthorizedError"
      });
  } else {
    // Otherwise continue
    User
        .findById(token._id)
        .exec(function(err, usr) {
            user = usr;
            if (user && user.email == 'biloko@tradoo.com.br' && user.permissions){
                var video = new Video();

                video.title = req.body.title;
                video.youtubeID = req.body.youtubeID;
                video.type = req.body.type;
                video.description = req.body.description;
                video.youtubeID = req.body.youtubeID;
                video.length = req.body.length;
                video.author = req.body.author;
                video.views = req.body.views;

                video.save(function(err, next) {
                    res.status(200);
                });
            }
            else {
                res.status(401).json({
                  "message" : "UnauthorizedError"
                });
            }
      });
  }
};

module.exports.getAll = function(req, res){
    Video.find({}, function(err, videos){
        res.send(videos);
    })
}

module.exports.getByType = function(req, res){
    Video.find({type: req.params.type}, function(err, videos){
        res.send(videos);
    })
}

module.exports.getById = function(req, res){
    console.log(req.params, req.params.id);
    Video.find({youtubeID: req.params.id}, function(err, videos){
        res.send(videos);
    })
}

module.exports.edit = function(req, res) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
      token = jwtDecode(token);
  } else {
      // if there is no token
      // return an error
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
  }

  var user;

  // If no user ID exists in the JWT return a 401
  if (!token._id) {
      res.status(401).json({
        "message" : "UnauthorizedError"
      });
  } else {
    // Otherwise continue
    User
        .findById(token._id)
        .exec(function(err, usr) {
            user = usr;
            if (user && user.email == 'biloko@tradoo.com.br' && user.permissions){
                var video = {};

                video.title = req.body.title;
                video.youtubeID = req.body.youtubeID;
                video.type = req.body.type;
                video.description = req.body.description;
                video.youtubeID = req.body.youtubeID;
                video.length = req.body.length;
                video.author = req.body.author;
                video.views = req.body.views;
                video._id = req.body._id;

                Video.findOneAndUpdate({_id: video._id}, video, {new: true}, function(err, next) {
                    return res.status(200);
                });
            }
            else {
                res.status(401).json({
                    "message" : "UnauthorizedError"
                });
            }
      });
  }

};
