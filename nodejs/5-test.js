function aa(){
    this.b = 1;
    this.bb = function(){
        console.log('hi');
    }
}

var A = new aa();
A.bb();

