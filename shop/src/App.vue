<template>
  <div id="app">
    <div>
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

</style>
