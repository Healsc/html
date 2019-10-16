const Koa = require('koa');
const app = new Koa();
const bpdyparser = require('koa-bodyparser');
app.use(bpdyparser())
app.use(async ctx => {
  ctx.body = 'Hello World';
  let data = ctx.request.body;
  ctx.body = data;
});

app.listen(3000,()=>{
    console.log('success')
});