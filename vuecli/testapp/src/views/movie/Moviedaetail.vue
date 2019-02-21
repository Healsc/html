<template>
  <div>
      <h2>{{dataInfo.title}}</h2>
      <span v-for="(item,index) in dataInfo.genres" :key="index">{{item+"/"}}</span>
      <!-- <div><img :src="dataInfo.images.small" alt=""></div> -->
      <p>{{"简介："+dataInfo.summary}}</p>
     <h1>hello</h1>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dataInfo:{},
        }
    },
    created() {
        this.getData();
        console.log(this.$route.params.movieId);
    },
    methods: {
        getData(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
            console.log(this.$route.params.movieId)
            //let url = 'https://api.douban.com/v2/movie/subject/26266893'
            axios.get(proxy+url)
            .then((res)=>{
                this.dataInfo = res.data;
                //console.log(res)
                console.log("详情")
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
