const Koa=require('koa')
const app = new Koa()

app.use(async ctx=>{
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.querystring;
    ctx.body = {
        url,
        query,// 返回对象 {"username":"zhangsan","age":"22"} 
        queryString // 返回字符串 "queryString":"username=zhangsan&age=22"
    }
})

app.listen(3000,()=>{
    console.log("success")
})

