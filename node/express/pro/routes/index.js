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

router.post('/check', function(req, res, next) {
  var uname = req.body.username;
  var upwd = req.body.password;
  console.log(uname);
  console.log(upwd);
  res.render('check',{
    'unanme':uname,
    'upwd':upwd,
    'data':[{
      'id':0,
      'name':'zhangsan',
      'age':10
    },{
      'id':1,
      'name':'lisi',
      'age':11
    }]
  });
});
//router.get('/login', User.reg);

module.exports = router;
