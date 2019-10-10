<template>
  <div>
   <van-nav-bar
      title="首页"
     >
    <van-icon name="search" slot="left" />  
    <van-icon name="cart" slot="right"></van-icon>

  </van-nav-bar>
  <div class="carousel">
    <van-swipe class="carousel-item" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in carouseItem" :key="index">
        <img :src="item.imsUrl" alt="">
      </van-swipe-item>
     
    </van-swipe>
  </div>
  <div class="hot">
    <p>

    </p>
    <!-- <swiper class="hot-swiper">
      <swiper-slide class="">
        <div class="">
            <div></div>
            <img src="" alt="">
            <div></div>
        </div>
      </swiper-slide>
    </swiper> -->
    
  </div>

  </div>
  
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
 data(){
   return{
     carouseItem:[
       {
         name:'1',
         imsUrl:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
       }, {
         name:'1',
         imsUrl:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
       }, {
         name:'1',
         imsUrl:'http://zgnjw.cunn.cn/file/upload/201401/09/14-31-12-93-1.jpg.middle.jpg'
       }
     ]
   }
 }
}
</script>
<style lang="scss">
  .carousel{
    height: 3rem;
    &-item{
     img{
       width: 100%;
       height: 3rem;
     }
    }
  }
</style>