<template>
  <div id="app">
    <div>
      <!-- <ul class="footbar">
        <li class="footbar-item">
          <router-link to="/">首页</router-link>
        </li>
        <li class="footbar-item">
          <router-link to="/category">分类</router-link></li>
        <li class="footbar-item">
          <router-link to="/cart">购物车</router-link>
        </li>
        <li class="footbar-item">
          <router-link to="/profile">我的</router-link>
        </li>
      </ul> -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="records">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  }

}
</script>
<style lang="scss">
 .footbar{
   display: flex;
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 1rem;
   line-height: 1rem;
  &-item{
    flex-grow: 1;
    background-color: #A0EEE1;
    text-align: center;

  }
 }
</style>
