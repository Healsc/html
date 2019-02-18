<template>
  <div>
    <ul>
        <li @click="getDatil(item.id)" class="item-list clearfix" v-for="(item,index) in dataList" :key="index">  
            <div class="list-left">
              <!-- <img :src="item.images.small" alt=""> -->
            </div>
            <div class="list-right">
              <h4>{{item.title}}</h4>
              <!-- <span v-for="(item,index) in item.casts" :key="index">{{item.name}}/</span> -->
              <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
              <br>
              <span>{{item.info}}</span>
              <!-- <span>{{"导演："+item.directors[0].name}}</span> -->
              <br>
              <!-- <span>{{item.year+"年"}}</span>  -->      
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList:[],
      listStart:0,
      isLoading:true,
    }
  },
 
   mounted() {
    window.onscroll = () =>{
      let clientHeight = document.documentElement.clientHeight;//可视区域高度
      let scrollTop = document.documentElement.scrollTop;//当前滚动高度
      let scrollHeigth = document.documentElement.scrollHeight;//滚动条可滚动高度
      //console.log(clientHeight,scrollTop,scrollHeigth)
      if(clientHeight+scrollTop>=scrollHeigth-10 && this.dataList.length !=20){
        this.listStart+=10;
        console.log(this.listStart);
        this.getData()
      }
    }
  },
   created(){
    let obj = {
      title:"电影",
      className:"movie"
    }
    this.$emit("changeNav",obj);
    this.getData();
  },
  methods:{
      getData(){
          let proxy = 'https://bird.ioliu.cn/v2?url='
          //let url = `https://api.douban.com/v2/movie/in_theaters?city=广州&start=${this.listStart}&count=10`
          let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=20'
          this.isLoading = false;
          console.log(1);
          axios.get(proxy+url)
          .then((res)=>{
            //this.dataList = res.data.subjects;
            this.dataList = res.data.subject_collection_items;
            //console.log(res);
            //console.log(this.dataList);
            //this.dataList = this.dataList.concat(res.data.subjects);
            this.isLoading = true;
            console.log(2)
          })
          .catch(()=>{
             console.log("失败");
          })
      },
      getDatil(id){
        this.$router.push({name:"moviedetail",params:{movieId:id}})
        //console.log(id)
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