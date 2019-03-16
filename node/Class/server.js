var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('node.js');
    res.end('<h1>hello world!</h1>');
}).listen('3000');
console.log("runing");