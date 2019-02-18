<template>
  <div>
      <h1>电影详情</h1>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dataInfo:[],
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
            axios.get(proxy+url)
            .then((res)=>{
                console.log(this.$route.params.movieId)
            /* console.log(res.data.title) */
          })
          .catch(()=>{
             console.log("失败");
          })
        }
    },
}
</script>
<style scope>
    
</style>
