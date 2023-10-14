var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Welcome to Dress Store Application'});
});

router.use('/api', apiRouter)

module.exports = router;
