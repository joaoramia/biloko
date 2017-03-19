var express = require('express');
var path = require('path');
var router = express.Router();
var Videos = require('../../videos.js');
var mongoose = require('mongoose');
var Video = mongoose.model('Video');

module.exports = router;

function findById(id){
    return Video.find({youtubeID: id}, function(err, video){
        return video;
    })
}

router.get('/:id', function (req, res) {
    findById(req.params.id)
    .then(function(video){
        res.render(path.join(__dirname + '/../../public/dist/index.html'), {
          title: video[0].title,
          description: video[0].description,
          url: 'http://www.tradoo.com.br/video/' + video[0].youtubeID,
          image: 'http://www.tradoo.com.br/assets/img/' + video[0].youtubeID + '.png',
          imageUrl: 'http://www.tradoo.com.br/assets/img/' + video[0].youtubeID + '.png'
        });
    })
    .catch(function(err){
        res.sendStatus(201);
    })
});

function findVideo(id){
    var videoFound;
    Videos.forEach(function(video){
        if(video.youtubeID == youtubeID) {
          videoFound = video;
        }
    })
    if(videoFound) {
        return videoFound;
    }
    else {
        return {
            author: 'Tradoo!',
            title: 'O Melhor do YouTube',
            id: 'mHbh9BUdwGY',
            type: 'Stand Up Comedy',
            description: 'Os melhores videos do YouTube traduzidos para você'
        };
    }
}
