import Mock from 'mockjs'
import data from './data.json'
import url from "@/servie.config"
Mock.mock('http://www.baidu.com/getList',{data:data.list});
Mock.mock('http://www.baidu.com/getInfo',{
    'name|2':"zhangsam",
    'age|18-23':20
})

Mock.mock('http://www.baidu.com/regxp',{
    'resxp1':/[a-z][A-Z][0-9]/,
    'regxp2':/\d{5,10}/ //5-10位之间的数字

})

Mock.mock('http://www.baidu.com/list',{
    'info|10-20':[
        {
            'index|+1':1,
            'name':'@first @last',
            'id':'@integer(1000-9999)',
            'data':'@datetime',
            'img':'@image("200*200")',
            'text':'@sentence(6,22)'
        }
    ]
})
let Random = Mock.Random
let productData = req =>{
    let productList = [];
    for(let i = 0; i < 100;i++){
        let product = {
            name:Random.ctitle(5,20),
            img:Random.dataImage('125x125','农机'+Random.integer(1,100)),
            price:Random.integer(10000,99999),
            owner:Random.cname(),
        }
        productList.push(product);
    }
    return productList;
}
 
Mock.mock(url.getVarietyItem,productData)