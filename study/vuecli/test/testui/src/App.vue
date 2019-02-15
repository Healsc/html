<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/test1">test1</router-link> |
      <router-link :to="{name:'test2',params:{name:'zs',age:'20'}}">test2</router-link>|
      <router-link to="/test3/ls/30">test3</router-link> |
      <router-link to="/home">重定向/返回首页</router-link> |
      <router-link to="/heal">别名</router-link>
    </div>
    <transition name="fade">
        <router-view/>
    </transition>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enterr-active{
  transition:all 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  scale: 1
}
.fade-leave-active{
  transition: all 3s ease;
}
.fade-leave-to{
  scale: 2
}
</style>
