setTimeout(function(){
    console.log('setTimeout')
},0);

process.nextTick(()=>{
    console.log('nextTick 1');
});
Promise.resolve().then(()=>{
    console.log('resolve 1');
});
process.nextTick(()=>{
    console.log('nextTick 2');
});
Promise.resolve().then(()=>{
    console.log('resolve 2');
});
console.log('end');

/* 
end
nextTick 1
nextTick 2
resolve 1
resolve 2
setTimeout 
*/