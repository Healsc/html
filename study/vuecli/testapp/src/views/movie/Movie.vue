<template>
  <div>
    <ul>
        <li class="item-list"> 
            <div class="list-left">1</div>
            <div class="list-right"></div>
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