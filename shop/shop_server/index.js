const Koa = require('koa');
const app = new Koa();
//解决跨域问题
const cors = require('koa2-cors')
app.use(cors({
    origin:['http://localhost:8080'],
    credentials:true
}))


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
router.use('/user',user.routes())

app.use(router.routes())
app.use(router.allowedMethods())


app.use(async ctx=>{
    ctx.body = 'hello';
})
app.listen(3000,()=>{
    console.log('strat serve')
})