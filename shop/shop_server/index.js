const Koa = require('koa');
const app = new Koa();

const {connect,initSchemas} = require('./init.js')
connect();
initSchemas();
/* (async () => {
    await connect();
    initSchemas();
})(); */

const Router = require('koa-router')
let user = require('./contriller/user.js')

let router = new Router()
router.use('/user',user.routers())

app.use(router.routers())
app.use(router.allowedMethods())


app.use(async ctx=>{
    ctx.body = 'hello';
})
app.listen(3000,()=>{
    console.log('strat serve')
})