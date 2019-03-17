var fs = require('fs');
fs.readFile('./file/test.text','utf-8',function(err,data){
    if(err){
        console.log("ERROR");
    }else{
        console.log(data);
    }
})
console.log("end");

//输出
//end
//hello world

