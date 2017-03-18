'use strict';
var router = require('express').Router();
var code = 'MiGold4321'
module.exports = router;

// router.use('/video', require('./video'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});

router.post('/getout', function (req, res, next) {
  console.log(req.body);
  res.satus(201).send({"user": "brubis", "token": "brubru"});
});
