var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    let path = url.parse(req.url).pathname;
    if(path == '/'){
        res.end('home')
    }else if(path == '/about'){
        res.end('about')
    }else if(path == '/mine'){
        res.end('mine')
    }else{
        res.end('ERROR404')
    }
}).listen('3001')
console.log('running')