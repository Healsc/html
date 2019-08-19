<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/heal">Heal</router-link> |
      <router-link to="/test">test</router-link> |
      <router-link :to="{name:'test1',params:{name:'zs'}}">test1</router-link> |
      <router-link to="/test/test2/ls/20">test2</router-link> |
       <router-link to="/home">返回首页</router-link> 
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
.fade-enter-active{
  transition:all 0.5s ease 1s; 
}

.fade-enter-to{
  opacity: 1;
} 
.fade-leave{
  opacity: 1;
}
.fade-leave-active {
  transition:all 1s ease; 
}
.fade-leave-to {
  opacity: 0;
}
</style>
