/* function demo(){
    this.a = 'hello';
    this.bb = function(){
        console.log('hello nodejs');
    }
}


module.exports = demo; */

exports.bb = {
    bb:function(){
        console.log('hi nodejs');
    }
}

/* module.exports = {
    a:'hello',
    bb:function(){
        console.log('hello node')
    }
} */