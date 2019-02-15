<template>
  <div>
 
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"音乐",
      className:"music"
    }
    this.$emit("changeNav",obj)
  }
}
</script>