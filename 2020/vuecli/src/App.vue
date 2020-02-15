<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/test">TEST</router-link> |
      <router-link to="/test/test1">test1</router-link> |
      <router-link :to="{name:'Test2',params:{name:'zhangsan',age:'2020'}}">test2</router-link> |
      <router-link to="/test/test3/lisi/2021">Test3</router-link> |
      <router-link to="/home">首页</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
