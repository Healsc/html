<template>
  <div>
    <ul>
        <li class="item-list clearfix"> 
            <div class="list-left">1
              <img src="" alt="">
            </div>
            <div class="list-right">2
              <h4>dianying</h4>
              <span>dianyuan</span>
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"电影",
      className:"movie"
    }
    this.$emit("changeNav",obj);

  },
  methods:{
      getData(){
          let proxy = 'https://bird.ioliu.cn/v2?url='
          let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10'
          axios.get(proxy+url)
          .then(()=>{
         
          })
          .catch(()=>{
             
          })
      }
  }
}
</script>
<style scoped>
  ul{
    padding: 10px;
  }
  .item-list{
    border-bottom: 1px solid #333;
    padding: 20px 0;
  }
  .item-list .list-left{
    float: left;
    width: 40%;
    text-align: center;
  }
  .item-list .list-left img{
    width: 80%;
  }
  .item-list .list-right{
    float: right;
    width: 55%;
    padding-left: 5%；
  }
  .clearfix::after{
    content:"";
    display: block;
    clear: both;
  }
</style>