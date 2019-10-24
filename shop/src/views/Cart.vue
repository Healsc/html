<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card v-for="(item, index) in pruductList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb="item.img">
        <div slot="footer">
            <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import axios from 'axios'
import url from "@/service.config.js"

export default {
  data() {
    return {
      pruductList: []
    };
  },
  computed: {
    ...mapState(['userInfo']),
    totalPrice(){
      
    }
  },
  methods: {
    
  },
  created() {
    if(JSON.stringify(this.userInfo) == '{}' ){
      this.$toast.fail('请登录');
      setTimeout(() => {
        this.$router.push('profile');
      }, 2000);
    }else{
      axios({
        url:url.getCart,
        method:'get',
        params:{
          userId:this.userInfo._id
        }
      }).then(res=>{
        //console.log(res.data)
        for (let item of res.data) {
          this.pruductList.push(item.productId);
        }
       
      }).catch(err=>{
        console.log(err)
      })
    }
  },

}
</script>
<style lang="">
  
</style>