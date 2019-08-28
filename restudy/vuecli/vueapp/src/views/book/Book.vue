<template>
    <div>
        book
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"书籍",
            activeName:"book"
        }
        this.$emit("changNav",obj)
    }
}
</script>
<style lang="stylus" scoped>

</style>