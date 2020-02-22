<template>
    <div>
       <h1> Book</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj:{
                name:"书籍",
                activeClass:"book",
            }
        }
    },
    mounted() {
        this.$emit('changVal',this.obj)
    },
}
</script>
<style scoped>
    div h1{
        margin-top: 2rem
    }
</style>