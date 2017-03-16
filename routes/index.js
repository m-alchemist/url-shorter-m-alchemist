
var express = require('express');
var shortid = require('shortid');
var validUrl = require('valid-url');
var router = express.Router();
var mongoose=require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
// router.get('/new/:url(*)', function(req,res,next){
//   res.send(req.params.url);
// })

module.exports = router;
