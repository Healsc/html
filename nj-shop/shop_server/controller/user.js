const Router = require('koa-router')
let router = new Router();
const mongoose = require('mongoose')

router.post('/registUser',async(ctx)=>{
    console.log("请求成功")
    ctx.body = "请求成功"
    const User = mongoose.model('User')
    let newUser = new User(ctx.request.body)
    await newUser.save().then(()=>{
         
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router;