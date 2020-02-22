<template>
    <div>
        <h1>music</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            refresh:{
                name:"音乐",
                activeClass:"music"
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
        margin-top: 2rem
    }
</style>