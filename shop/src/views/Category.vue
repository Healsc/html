<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="categry">
      <van-col span="6" class="nav">
        <ul>
          <li @click="selectCategory(item.typeId,index)" :class="{active:active == index}" v-for="(item,index) in types" :key="index">{{item.typeName}}</li>
        </ul>
      </van-col>
      <van-col span="18" class="container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" @load='onload' v-model="isLoading" :finished="finished">
            <div class="content-item" v-for="(item,index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
        </van-pull-refresh>
 
      </van-col>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import url from '@/servie.config.js'

export default {
  data(){
    return{
       types:[

       ],
       active:0,
       productList:[],
       typeId:1,
       start:0,
       limit:10,
       isLoading:false,
       finished:false,
    }
  },
  created(){
    axios({
      url:url.getTypes
    }).then(res=>{
      this.types = res.data
     //console.log(res.data)
      //console.log(this.types[0])
      this.selectCategory(this.typeId,this.active);
    }
    ).catch(err=>{
      console.log(err)
    })
  },
  name: 'home',
  components: {
    
  },
  methods: {
    selectCategory(typeId,index){
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.getproductList();
      this.finished = false;
    },
    getproductList(){
      this.isLoading = true;
      axios({
        url:url.getProductsByType,
        method:'get',
        params:{
          typeId:this.typeId,
          start:this.productList.length,
          limit:this.limit
        }
      }).then(res=>{
        if(res.data.length != 0){
          this.productList = this.productList.concat(res.data);
        }else{
          this.finished = true;
        }
        this.isLoading = false;
 
      }).catch(err=>{
        console.log(err)
      })
    },
    onload(){
      setTimeout(()=>{
        this.getproductList();
      },2000)
    },
    onRefresh(){
      setTimeout(()=>{
        this.getproductList();
      },2000)
    }
  },
}
</script>
<style lang="scss">
  .nav{
    background-color: #AEEEE1;
    li{
      height: .6rem;
      line-height: .6rem;
      border-bottom: 1px solid #fff;
      padding:3px;
      text-align: center;
    }
  }
  .active{
    background-color: rgb(20, 87, 46);
  }
  .container{
    background-color: #fff;
    position: fixed;
    top: 1rem;
    bottom: 1rem;
    right: 0;
    overflow-y: scroll;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    &-item{
      width: 40%;
      padding: 0 10px;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
      &-name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>