function getTel(){
    var prefixArr = ['130','131','132','133'];
    var tel = prefixArr[parseInt(Math.random() * 10)];
    for(var i = 0;i < 8;i++){
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}
console.log(getTel());