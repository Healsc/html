var User_model=require('../models/user_model');
exports.reg=function(req,res,next){
    res.render('reg',{
        'num':2020
    });
}
exports.do_reg=function(req,res,next){
    var name = req.body.name;
    var pass = req.body.password;
    console.log(name);
    console.log(pass);
    User_model.insert_data(function(error,data){
        console.log(data);
    });
}