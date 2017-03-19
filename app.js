var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./app_api/models/db');
require('./app_api/config/passport');

// [SH] Bring in the routes for the API (delete the default routes)
var routesApi = require('./app_api/routes/index');

var app = express();
var compression = require('compression');
var session = require('express-session');
var swig = require('swig');
var Videos = require('./videos.js');
var videoRoutes = require('./routes/video');

var swig = new swig.Swig();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.header('Access-Control-Max-Age', '1000');
  next();
});

// NEW

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// [SH] Set the app_client folder to serve static resources
app.use(express.static(path.join(__dirname, 'app_client')));

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

app.use('/api', routesApi);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


app.use(compression());
app.use(express.static(path.join(__dirname + '/public/dist')));
app.use(express.static(path.join(__dirname + '/node_modules')));


app.use('/video', videoRoutes);

app.all('/*', function (req, res) {
    res.render(path.join(__dirname + '/public/dist/index.html'), {
        title: 'O Melhor do YouTube',
        description: 'Os melhores videos do YouTube traduzidos para você',
        url: 'http://www.tradoo.com.br',
        image: 'http://www.tradoo.com.br/assets/img/mHbh9BUdwGY.png',
        imageUrl: 'http://www.tradoo.com.br/assets/img/mHbh9BUdwGY.png'
    });
});

var server = app.listen(Number(process.env.PORT) || 3030, function () {
  console.log('App listening on port ', Number(process.env.PORT) || 3030);
});
