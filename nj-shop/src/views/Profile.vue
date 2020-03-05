<template>
    <div class="profile">
         <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" 
            required clearable placeholder="请输入用户名" 
            v-model="loginUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="loginPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" 
            v-model="registUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="registPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
    </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: ""
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    // 注册的处理方法
    registHandler() {
      axios({
        url:' http://localhost:3000/user/registUser',
        method: "post",
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      })
        .then( (res)=> {
            console.log(res)
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registUsername = this.registPassword = "";
          } else {
            this.$toast.fail("用户名已存在");
          }
        })
        .catch((err) => {
          console.log('错误：'+err);
          this.$toast.fail("注册失败");
        });
    },
    // 登录的处理方法
    loginHandler() {
      axios({
        url:'http://localhost:3000/user/loginUser',
        method:"post",
        data:{
          userName:this.loginUsername,
          password:this.loginPassword
        }
      }).then(res=>{
        if(res.data.code == 200){
          console.log(res.data)
          this.$toast.success('登录成功');
          this.loginAction(res.data.userInfo);
          this.$router.go(-1)
        }else if(res.data.code == 201){
          this.$toast.fail('密码错误')
        }else if(res.data.code == 202){
          this.$toast.fail('用户不存在')
        }
      }).catch(err=>{
        this.$toast.fail('失败')
        console.log(err)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.profile{
  
}
</style>