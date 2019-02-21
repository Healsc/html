<template>
    <div>
        照片
    </div>
</template>
<script>
export default {
     created() {
       let obj = {
           title:"聊天",
           className:"chat"
       }
       this.$emit("changeNav",obj)
   }, 
}
</script>
<style scoped>

</style>