<template>
  <div>
    <van-row>
    <van-col span="6" class="nav">
      <ul>
        <li v-for="(item,index) in types" :key = "index"
          :class="{active:active==index}"
          @click="selectCategory(item.typeId,index)"
        >
          {{item.typeName}}
        </li>
      </ul>
    </van-col>
    <van-col span="18" class="container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" @load="onLoad" v-model="isLoading">
            <div class="content-item" v-for="(item,index) in productList" :key ="index">
              <img :src="item.img" alt=""> 
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
              <p></p>
            </div>
          </van-list>
      </van-pull-refresh>
   

    </van-col>
  </van-row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      types:[],
      active:0,
      typeId:1,
      start:0,
      limit:10,
      productList:[],
      isLoading:false
    }
  },
  methods: {
    getProductList(){
      this.isLoading = true;
      axios({
        url:'http://localhost:3000/product/getProductsByType',
        method:'get',
        params:{
         typeId:this.typeId,
         start:this.productList.length,
         limit:this.limit
        }
      }).then((res)=>{
        this.isLoading = false;
        this.productList = this.productList.concat(res.data)
        //this.selectCategory(this.typeId,this.active)
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    },
    selectCategory(typeId,index){
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.getProductList();
      this.isLoading = false;
    },
    onLoad(){
      setTimeout(()=>{
        this.getProductList();
      },1000)
    },
    onRefresh(){
      setTimeout(()=>{
        this.productList = [];
        this.getProductList();
      },2000)
    }
  },

  created() {
    axios({
      url:'http://localhost:3000/type/getTypes'
    }).then(res=>{
      this.types = res.data
      this.selectCategory(this.typeId,this.active)
      //console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },
}
</script>
<style lang="scss" scoped>
  .nav{
    background-color: #eee;
    li{
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      border-bottom: 1px solid #fff;
      padding: 4px;
    }
    .active{
      background-color: #fff;
    }
  }
  .container {
    position: fixed;
    top: .2rem;
    bottom: 1rem;
    right: 0;
    overflow-y: scroll;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item{
      width: 40%;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
      &-name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow:hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>