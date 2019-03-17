const event = require('events')
class MyEmitter  extends event{}
const myEmitter = new MyEmitter();
myEmitter.on('event',()=>{
    console.log('触发事件');
});
myEmitter.emit('event');
console.log(1)