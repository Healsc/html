var http = require('http')
var url = require("url")
var fs = require('fs')
http.createServer(function(req,res){
    let path = url.parse(req.url).pathname;
    if(path == "/"){
        fs.readFile('./file/test.text','utf-8',function(err,data){
            res.writeHead(200,{'Content-Type':'text/index'})
            res.end(data);
        })
    }else{
        res.end("404");
    }
}).listen("3000");
console.log("running");