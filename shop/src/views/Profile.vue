<template>
  <div>

    <van-tabs >
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUserName"></van-field>
          <van-field label="密码" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 
  components: {
    
  },
  data() {
    return {
      loginUserName:'',
      loginPassword:'',
    }
  },
}
</script>
<style lang="">
  
</style>
