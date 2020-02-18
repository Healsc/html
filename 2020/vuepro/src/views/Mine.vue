<template>
  <div class="home">
    <HelloWorld msg="hello world"/>
    <Header msg="hello vue"/>
    <HelloVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import HelloVue from '@/components/HelloVue.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    HelloVue
  }
}
</script>

