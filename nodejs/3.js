var http = require('http');
urls = ['www.baidu.com','www.qq.com','www.163.com'];
function fetchPage(url){
    var start = new Date();
    http.get({'host':url},function(res){
        console.log("get Respone  " + url);
        console.log((new Date() - start) + 'ms')
    })
}

for(var i = 0;i < 3;i++){
    fetchPage(urls[i]);
}
