var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'}); // Content-type:text/html 编码 告诉浏览器如何解释代码
    res.end('<h1>Hello World</h1>');//Hello World
}).listen(3000);

console.log('Server Start'); 