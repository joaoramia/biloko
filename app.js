var express = require('express');
var app = express();
var compression = require('compression');
var path = require('path');
var session = require('express-session');
// var db = require('./db');
// var SequelizeStore = require('connect-session-sequelize')(session.Store);
//
// var dbStore = new SequelizeStore({
//     db: db
// });

app.use(compression());
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/node_modules')));

// app.use('/api', require('./routes'));

app.all('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


var server = app.listen(Number(process.env.PORT) || 3030, function () {
  console.log('App listening on port ', Number(process.env.PORT) || 3030);
});
