<template>
    <div>
        <h1> chat</h1>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj:{
                name:"聊天",
                activeClass:"chat"
            }
        }
    },
    mounted() {
        this.$emit("changVal",this.obj)
    },
}
</script>
<style scoped>
    div h1{
        margin-top: 2rem
    }
</style>