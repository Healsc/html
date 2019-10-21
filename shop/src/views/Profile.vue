<template>
  <div>

    <van-tabs >
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUserName"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" @click="loginHandler" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUserName"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" @click="registHandler" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import url from '@/servie.config.js'
import axios from 'axios'
export default {
  methods: {
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUserName,
          password:this.registPassword,
        }
      }).then(res=>{
        if(res.data.code == 200){
          this.Toast.success("注册成功");
          this.registUsername = this.registPassword = "";
        }else{
           //this.$toast.fail("注册失败");
        }
      }).catch(err=>{
         this.Toast.fail("注册失败");
         console.log(err)
      })
    },
    loginHandler(){
      axios({
        url:url.loginUser,
        method:'post',
        data:{
          userName:this.loginUserName,
          password:this.loginPassword
        }
      }).then(res=>{

      }).catch(err=>{

      })
    }
  },
  components: {
    
  },
  data() {
    return {
      loginUserName:'',
      loginPassword:'',
      registUserName:'',
      registPassword:'',
    }
  },
}
</script>
<style lang="">
  
</style>
