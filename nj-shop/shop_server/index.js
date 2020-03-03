const Koa = require('koa')
const app = new Koa()

app.use(async ctx=>{
    ctx.body = "hah"
})

app.listen(3000,()=>{
    console.log('success')
})