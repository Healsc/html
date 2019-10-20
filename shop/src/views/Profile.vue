<template>
  <div>

    <van-tabs >
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUserName"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
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
        console.log(res)
      }).catch(err=>{
        console.log(err)
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
