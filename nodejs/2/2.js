function haveLunch(food,drink,callback){
    console.log('food:'+food+'drink:'+drink);
    if(callback && typeof(callback) === 'function'){
        setTimeout(function(){
            callback();
        },5000)
    }
}

haveLunch('toast','offee',function(){
    console.log('Finished Lunch')
});