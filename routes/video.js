var express = require('express');
var router = express.Router();
var db = require('../db/_db');
var video = db.model('video');

module.exports = router;

router.get('/', function(req, res, next) {
  video.findAll({})
  .then(function(videosFound){
    res.status(200).send(videosFound)
  })
  .catch(function(err){
      return next;
  })
})

router.put('/:videoId', function (req, res, next) {
	video.findAll({
    where: {videoId:req.params.videoId}
  })
	.then(function(videoItem){
    if(!videoItem.length){
      return video.create({videoId: req.params.videoId, views: 1})
    }
    else {
      return videoItem[0].update({});
    }
	})
  .then(function(videoItem){
    res.status(201).send(videoItem);
  })
	.catch(next);
});
