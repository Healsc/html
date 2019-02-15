<template>
  <div>
    
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"唠嗑",
      className:"chat"
    }
    this.$emit("changeNav",obj)
  }
}
</script>