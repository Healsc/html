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
        this.$emit("changeNav",obj);
        this.getData();
    },
    methods: {
        getData(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `http://t.yushu.im/v2/movie/top250?start=0&count=20`
            this.$ajax({
                method: 'get',
                url: proxy+url,
                data: {
                    name: 'wise',
                    info: 'wrong'
                }
            })   
            this.$ajax.get(proxy+url)
            .then(function(res){
                console.log(res)
            })  
        }
    },
}
</script>
<style lang="stylus" scoped>

</style>