import Mock from 'mockjs'
import data from './data.json'
Mock.mock("https://api.myjson.com/bins/9inum",{dataList:data})
Mock.mock('https://www.heal.com/getData',{
    "name|2":'heal',
    "age|2|8":4
})
Mock.mock('https://www.heal.com/getData2',{
    "list|10-20":[
        {
            "id|+1":0,
            "cname":"@cname",
            "name":"@first @last",
            "time":"@time(hh:mm:ss)",
            "address":"@province"
        }
    ]
})

let Random = Mock.Random;
let dataList =()=>{
    let list = [];
    for(let i=0;i<10;i++){
      let obj = {
        name:Random.cname(),
        id:Random.integer(10000,99999),
        address:Random.province(),
        text:Random.cword(10),
      }
      list.push(obj);
    }
    return list;
  }
Mock.mock('https://www.heal.com/getData3',{data:dataList})