var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).query;
    var data = '{"name":"zhangsan","age":"3"}';
    var obj = eval("("+data+")");
    console.log(obj)

}).listen(3000);

console.log('server start');