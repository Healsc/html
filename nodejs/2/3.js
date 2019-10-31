var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    var pathname = url.parse(req.url);
    console.log(pathname);

    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h1>hello nodejs</h1>");
}).listen(3000);

console.log('start')