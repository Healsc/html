<template>
  <div>
    
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"书籍",
      className:"book"
    }
    this.$emit("changeNav",obj)
  }
}
</script>