<template>
    <div>
        movie
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"电影",
            activeName:"movie"
        }
        this.$emit("changeNav",obj)
    },
}
</script>
<style lang="stylus" scoped>

</style>