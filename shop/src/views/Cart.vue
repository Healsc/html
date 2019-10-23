<template>
  <div>gouwuche</div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import axios from 'axios'
import url from "@/service.config.js"

export default {
   data() {
    return {
      productList:[]
    }
  },
  computed: {
    ...mapState(['userInfo'])
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
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  },

}
</script>
<style lang="">
  
</style>