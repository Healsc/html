<template>
    <div>
       <!--  电影 -->
    </div>
</template>
<script>
export default {
     created() {
       let obj = {
           title:"电影",
           className:"movie"
       }
       this.$emit("changeNav",obj)
   }, 
}
</script>
<style scoped>

</style>