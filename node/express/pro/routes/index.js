var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/check', function(req, res, next) {
  res.render('check',{
    'data':[{
      'id':0,
      'name':'zhangsan',
      'age':10
    },{
      'id':1,
      'name':'lisi',
      'age':11
    },{
      'id':2,
      'name':'zhaowu',
      'age':13
    }]
  });
});
//router.get('/login', User.reg);

module.exports = router;
