<template>
  <div id="app">
    <div>
      <ul class="footbar">
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
    </ul>
    <router-view></router-view>
    </div>
    
  </div>
</template>

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
