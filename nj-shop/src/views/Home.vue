<template>
  <div class="home">
       <div class="clearfix">
          <div class="header">
              <van-nav-bar title="商城">
                <van-icon  slot="left" name="search"></van-icon>
                <van-icon name="" slot="right" @click="$router.push('/profile')">{{JSON.stringify(userInfo) === '{}' ? '未登录' : userInfo.userName}}</van-icon>
              </van-nav-bar>
          </div>
      </div>
      <div class="carousel">
        <van-swipe class="carousel-swipe" :autoplay="3000">
          <van-swipe-item v-for="(item,index) in swipeList" :key="index">
            <img v-lazy="item.imgSrc" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="hot">
        <p class="hot-title">热门商品</p>
         <swiper class="hot-swipe" :options="swiperOption">
            <swiper-slide v-for="(item,index) in hotList" :key="index">
                <div class="hot-swipe-content">
                  <img :src="item.img" alt="">
                  <div>{{item.name}}</div>
                  <div>￥{{item.price}}</div>
                  <div>{{item.owner}}</div>
                </div>
            </swiper-slide>
        </swiper>
      </div>
      <div class="recommend">
        <p class="recommend-title">推荐商品</p>
        <ul>
          <li class="recommend-item" v-for="(item,index) in recommedshowList" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>产地：{{item.city}}</p>
            <p>￥{{item.price}}</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from "axios";
import '@/mock/mock.js';
import { mapState } from "vuex";
export default {
    computed: {
      ...mapState(["userInfo"])
    },
    data() {
    return {
      recommedshowList:[],
      swiperOption:{
        slidesPerView:3
      },
      swipeList:[
        {
          imgSrc:"https://cbu01.alicdn.com/img/ibank/2019/018/429/12039924810_42785092.220x220.jpg?_=2020"
        },{
          imgSrc:"https://cbu01.alicdn.com/img/ibank/2017/786/802/7282208687_755873565.220x220.jpg?_=2020"
        },{
          imgSrc:"https://cbu01.alicdn.com/img/ibank/2019/678/912/12656219876_1491088434.220x220.jpg?_=2020"
        }
      ],
      hotList:[
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
            "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
            "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
            "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
            "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
      ],
      recommedList:[
        {
          name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
          img:
            "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
            "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
            "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   厂家直销大型花生收获机 地下薯类挖收机",
          img:
            "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
      ]
    }
  },
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  created() {
    let url = "healsc.cn/getList"
    axios.get(url).then(res=>{
      this.recommedshowList=res.data
    })
  },
}
</script>
<style lang="scss" scoped>
.home{
  background-color: #eee;
}
.clearfix{
  height: 1rem;
}
.header{
  position: fixed;
  top: 0;
  height: 2rem;
  width: 100%;
}
.carousel{
  &-swipe{
    img{
      width: 100%;
      height: 2.6rem;
    }
  }
}

.hot{
  background-color: #fff;
  margin-top:.2rem;
  &-title{
    height: .5rem;
    text-align: center;
    line-height: .5rem;
  }
  &-swipe{
    margin-left: .1rem;
    margin-right: .1rem;
    text-align: center;
    &-content{
      width: 2rem;
      text-align:center;
      img{
        width: 2rem;
        height: 2rem
      }
    }
  }
}
.recommend{
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  &-title{
    text-align: center;
    height: .5rem;
    line-height: .5rem;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
  &-item{
    flex-basis: 45%;
    img{
      height: 2rem;
      width: 2rem;
    }
  }
}
</style>
