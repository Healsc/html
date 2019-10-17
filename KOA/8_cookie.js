const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    if(ctx.url == '/hahaha'){
        ctx.cookies.set(
            'name','hahaha',{
                domain:'localhost',
                path:"/hahaha",
                maxAge:60*24,
            }
        )
    }
    ctx.body = "cookie"
})

app.listen(3000,()=>{
    console.log('hahaha')
})