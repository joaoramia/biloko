var express = require('express');
var app = express();
var compression = require('compression');
var path = require('path');
var session = require('express-session');
var swig = require('swig');
var Videos = require('./videos.js');

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// var db = require('./db');
// var SequelizeStore = require('connect-session-sequelize')(session.Store);
//
// var dbStore = new SequelizeStore({
//     db: db
// });

app.use(compression());
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/node_modules')));

app.get('/video/:id', function (req, res) {
    var video = findVideo(req.params.id);

    res.render(path.join(__dirname + '/public/index.html'), {
      title: video.title,
      description: video.description,
      url: 'http://www.tradoo.com.br/video/' + video.id,
      image: 'http://www.tradoo.com.br/assets/img/' + video.id + '.png',
      imageUrl: 'http://www.tradoo.com.br/assets/img/' + video.id + '.png'
    });
});

app.all('/*', function (req, res) {
    var video = findVideo('fakeId');
    res.render(path.join(__dirname + '/public/index.html'), {
      title: video.title,
      description: video.description,
      url: 'http://www.tradoo.com.br' + req.originalUrl,
      image: 'http://www.tradoo.com.br/assets/img/' + video.id + '.png',
      imageUrl: 'http://www.tradoo.com.br/assets/img/' + video.id + '.png'
    });
});

function findVideo(id){
    var videoFound;
    Videos.forEach(function(video){
        if(video.id == id) videoFound = video;
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

var server = app.listen(Number(process.env.PORT) || 3030, function () {
  console.log('App listening on port ', Number(process.env.PORT) || 3030);
});
