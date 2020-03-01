<template>
  <div>
 
   
  <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="profile">我的</van-tabbar-item>
  </van-tabbar>
  <router-view></router-view>

   <!--  <div class="footer">
      <ul class="footer-nav">
        <li>首页</li>
        <li>分类</li>
        <li>购物车</li>
        <li>我的</li>
      </ul>
    </div> -->


    <!-- <router-view/> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0,
    }
  }
}
</script>
<style lang="scss">




/* .footer{
  margin-top: 1rem;
  &-nav{
    height: 1rem;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    li{
      flex-grow: 1;
      text-align:center;
      line-height: 1rem;
    }
  }
} */
</style>
