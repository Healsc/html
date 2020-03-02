import Mock from 'mockjs'

let Random = Mock.Random;
let producData = ()=>{
    let productList = [];
    for(let i = 0;i < 20;i++){
        let product = {
            name:Random.ctitle(10,15),
            img:Random.dataImage('125x125',"农机"+Random.integer(10,99)),
            price:Random.integer(10000,66666),
            city:Random.ctitle(5,8)
        }
        productList.push(product)
    }
    return productList;
}
Mock.mock('healsc.cn/getList',producData)


let productData = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.healsc.cn/getVarietyItem', productData);
