<template>
    <div>
        chat
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"聊天",
            activeName:"chat"
        }
        this.$emit("changeNav",obj)
    }
}
</script>
<style lang="stylus" scoped>

</style>