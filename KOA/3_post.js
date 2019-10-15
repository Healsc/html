const Koa = require('koa')
const app = new Koa();
app.use(async ctx=>{
    let data = '';
    //监听data事件
    ctx.req.on('data',chunk => {
        data += chunk;
    });
    ctx.req.on('end',() => {
        data = decodeURI(data);
        console.log(data)
    })
    
    ctx.body = 1;
})
app.listen(3000,()=>{
    console.log('succe')
})


