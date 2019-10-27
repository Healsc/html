for(var i = 0;i <= 3;i++){
    setTimeout(function(){
        console.log(i);
    },0)
}
console.log('end');

//输出结果
//  end
//  4
//  4
//  4

// 1. JS解释器先臊面同步代码和异步代码
// 2. 把异步代码抛给事件循环
// 3. 当前线程必须空闲，同时满足触发条件（）
// 4. 

