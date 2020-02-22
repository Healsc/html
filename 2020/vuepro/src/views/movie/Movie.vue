<template>
    <div>
       <h1> movie</h1>
    </div>
</template>
<script>
export default {
    data() {
      return {
        refresh:{
          name:"电影",
          activeClass:"movie"
        }
      }
    },
    mounted() {
      this.$emit('changVal',this.refresh)
    },
}
</script>
<style scoped>
    div h1{
      margin-top: 1rem  
    }
</style>