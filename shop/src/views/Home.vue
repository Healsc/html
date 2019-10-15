<template>
  <div class="container">
    <div  class="nav-title">
        <van-nav-bar title="首页">
          <van-icon name="search" slot="left" />  
          <van-icon name="cart" slot="right"></van-icon>
        </van-nav-bar>
    </div>

    <div class="carousel">
      <van-swipe class="carousel-item" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in carouseItem" :key="index">
          <img v-lazy="item.imsUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hot">
        <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProduces" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
            <div>￥{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="variety">
      <p>推荐商品</p>
        <ul>
          <li class="variety-item" v-for="(item,index) in verietyItem" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>￥{{item.price}}</p>
          </li>
        </ul>
    </div>
  </div> 
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from "axios"
export default {
 data(){
   return{
     carouseItem:[
       {
         name:'1',
         imsUrl:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
       }, {
         name:'2',
         imsUrl:'https://img.nongji360.com/n/edition/2016/05/05/185605528414.jpg'
       }, {
         name:'3',
         imsUrl:'https://img.nongji360.com/n/edition/2016/05/13/114203861263.jpg'
       }
     ],
     hotProduces:[
         {
            name:'1',
            price:"123",
            img:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
          }, {
            name:'2',
            price:"1234",
            img:'https://img.nongji360.com/n/edition/2016/05/05/185605528414.jpg'
          }, {
            name:'3',
            price:"1232",
            img:'https://img.nongji360.com/n/edition/2016/05/13/114203861263.jpg'
          },
           {
            name:'4',
            price:"1213",
            img:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
          }, {
            name:'5',
            price:"12134",
            img:'https://img.nongji360.com/n/edition/2016/05/13/114203861263.jpg'
          }, {
            name:'6',
            price:"12132",
            img:'https://img.nongji360.com/n/edition/2016/05/05/185605528414.jpg'
          },
     ],
     swiperOption: {
          slidesPerView:3
     },
     verietyItem:[
      {
        name:'1',
        price:"123",
        img:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
      }, {
        name:'2',
        price:"1234",
        img:'https://img.nongji360.com/n/edition/2016/05/05/185605528414.jpg'
      }, {
        name:'3',
        price:"1232",
        img:'https://img.nongji360.com/n/edition/2016/05/13/114203861263.jpg'
      },
        {
        name:'4',
        price:"1213",
        img:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
      }, {
        name:'5',
        price:"12134",
        img:'https://img.nongji360.com/n/edition/2016/05/13/114203861263.jpg'
      }, {
        name:'6',
        price:"12132",
        img:'https://img.nongji360.com/n/edition/2016/05/05/185605528414.jpg'
      },
     ]
   }
 },
   components: {
    swiper,
    swiperSlide
  },
  created() {
    console.log('hello');
    //let url1 = 'http://www.baidu.com/getList';
    axios.get('https://bird.ioliu.cn/v2?url=https://douban.uieee.com/v2/movie/top250').then(res=>{
      console.log(res)
    });
  },
}

</script>
<style lang="scss">
  .container{
    background-color: #ccc;
  }
  .nav-title{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999!important;//权重值最大
    width: 100%;
  }
  .carousel{
    height: 3rem;
    &-item{
     img{
       width: 100%;
       height: 3rem;
     }
    }
  }
  .hot{
    background: #fff;
    margin-top:.1rem;
    &-title{
      width: 100%；
      height  .5rem;
      padding-left: .2rem;
      line-height: .5rem;
      text-align: center;
      box-sizing: border-box;//怪异盒模型
    }
    &-swiper{
      &-content{
        width: 2rem;
        text-align: center;
        img{
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  .variety{
    margin-top: .1rem;
    margin-bottom: 1rem;
    background: #fff;
    text-align: center;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;//水平居中
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
  }
</style>