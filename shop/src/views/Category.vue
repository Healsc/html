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
        <van-list class="content">

        </van-list>
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
    }
  },
  created(){
    axios({
      url:url.getTypes
    }).then(res=>{
      this.types = res.data
     //console.log(res.data)
      //console.log(this.types[0])
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
    },
    getproductList(){
      axios({
        url:url.
      }).then(res=>{

      }).catch(err=>{
        console.log(err)
      })
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
    background-color: #fff;
  }
</style>