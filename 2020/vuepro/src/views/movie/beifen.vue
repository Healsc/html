<template>
    <div class="movie">
      <h1>hello</h1>
       <ul>
         <!-- v-for="(item,index) in movieList" :key="index" -->
         <li class="clearfix" v-for="(item,index) in dataList" :key="index">
           <div class="movie-left">
             <img src="" alt="">
            </div>
           <div class="movie-right">
              <h4>{{item.title}}</h4>
              <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
              <p>{{item.year}}年</p>
           </div>
         </li>
       </ul>
    </div>
</template>
<script>
export default {
    data() {
      return {
        refresh:{
          name:"电影",
          activeClass:"movie"
        },
         movieList:"",
         dataList:[]
      }
    },
    mounted() {
      this.$emit('changVal',this.refresh);
    },
    created() {
       this.getMovie();
    },
    methods: {
      getMovie(){
        let proxy = 'https://bird.ioliu.cn/v2?url='
        let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10'
        this.$axios.get(proxy+url)
        .then(function(res){
          console.log(res)
          console.log(res.data.subject_collection_items)
          this.dataList = this.dataList.res.data.subject_collection_items;
          //console.log(this.movieList)
        })
        .catch(function(){
          //alert("请刷新")
          //console.log("失败")
        })
      }
    },
}
</script>
<style scoped>
    .movie{
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .movie-left,.movie-right{
      height: 2.6rem;
    }
    .movie-left{
      width: 40%;
      background-color: #666;
      float: left;
    }
    .movie-right{
      width: 60%;
      background-color: #ccc;
      float: right;
    }
    .clearfix::after{
      content:"";
      display:block;
      clear: both;
    }
</style>