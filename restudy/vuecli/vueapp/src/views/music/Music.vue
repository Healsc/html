<template>
    <div>
        music
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"音乐",
            activeName:"music"
        }
        this.$emit("changeNav",obj)
    },
}
</script>
<style lang="stylus" scoped>

</style>