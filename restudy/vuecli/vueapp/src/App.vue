<template>
  <div id="app">
    <navigation :activeNav="activeNav"/>
    <router-view @changeNav = "change"/>
  
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>

import navigation from '@/components/Navigation.vue'
export default {
  components:{
    navigation
  },
  data() {
    return {
      activeNav:{
        title:"电影",
        activeClass:"movie"
      }
    }
  },
  methods: {
    change(obj){
      this.activeNav.title = obj.title;
      this.activeNav.activeClass = obj.activeName;
    }  
  },
}
</script>
