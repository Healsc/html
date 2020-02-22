<template>
  <div id="app">
    <Navigation :refresh="refresh"/>
    <router-view @changVal="change"></router-view >
  </div>
</template>

<style>

</style>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  data() {
    return {
     refresh:{
       name:"",
       activeClass:"",
     }
    }
  },
  components:{
    Navigation
  },
  methods: {
    change(val){
      //console.log(val.name)
      this.refresh.name = val.name
      this.refresh.activeClass = val.activeClass
      //console.log(this.refresh)
    }
  },
}

</script>
<style scoped>

</style>
