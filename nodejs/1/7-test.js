var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('<h1>Hello World</h1>');//<h1>Hello World</h1>
}).listen(3000);

console.log('Server Start');