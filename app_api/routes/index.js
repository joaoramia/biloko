var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlVideo = require('../controllers/video-editor');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// edit videos
router.post('/video/add', ctrlVideo.add);
router.post('/video/edit', ctrlVideo.edit);
router.get('/video/get', ctrlVideo.getAll);
router.get('/video/:id', ctrlVideo.getById);
router.get('/video/get/:type', ctrlVideo.getByType);

module.exports = router;
