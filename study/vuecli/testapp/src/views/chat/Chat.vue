<template>
  <div>
    <div class="talk-bar">
      <ul>
        <li v-for="(item,index) in chatList" :key="index">
          <div class="right">
            <span>{{item.question}}</span>
          </div>
          <div class="left">
            <span>{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="talk-form">
      <input type="text" v-model="msg">
      <button v-on:click="send">发送</button>
    </div>
  </div>
</template>
<style scoped>
  .talk-form{
    width: 100%;
    height: .6rem;
    line-height: 0.6rem;
    background-color: rgba(63, 81, 181,.6);
    text-align: center;
    position: fixed;
    bottom: 1rem;
  }
  .talk-bar span{
    padding:5px 10px;
    background-color: rgba(63, 81, 181,.2);
  }
  .talk-bar .left{
    text-align: left;
    margin:0.1rem;
  }
  .talk-bar .right{
    text-align: right;
    margin:0.1rem;
  }
</style>

<script>
import md5 from "js-md5";
export default {
  data() {
    return {
      msg:'',
      chatList:[],
    }
  },
  created(){
    let obj = {
      title:"唠嗑",
      className:"chat"
    }
    this.$emit("changeNav",obj)
  },

  methods: {
    getTimeStamp(){
      var timestamp = Date.parse(new Date());
      timestamp = timestamp.toString().substr(0,10);
      //console.log(params.time_stamp)
      return timestamp;
    },
    getNonceStr(){
      let str = Math.random().toString(36).substr(2);
      //console.log(str);
      return str;
    },
    getReqSign(params,appkey){
      let arr=[];
      let obj={};
      let str = "";

      arr = Object.keys(params).sort();
      arr.forEach((item,index,arr)=>{
        obj[item] = params[item];
        //console.log(obj)
      })

      for(let item in obj){
        if(obj[item]!=""){
          str+=item+"="+encodeURI(obj[item])+"&";
        }
      }
      //console.log(str);

      str += 'app_key='+appkey;
      //console.log(str);

      str = md5(str).toUpperCase();
      //console.log(str);

      return str;
    },
    send(){
      let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
      let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
      let params = {
        app_id:"2111882338",
        time_stamp:this.getTimeStamp(),
        nonce_str:this.getNonceStr(),
        sign:"",
        session:"10001",
        question:this.msg,
      }
      let appkey = "luAmnq5y8Q4f29Qj";
      params.sign = this.getReqSign(params,appkey);
      axios({
        url:API_PROXY+url,
        method: 'post',
        data: {...params},
      }).then((res)=>{
        let obj = {
          question:this.msg,
          answer:res.data.data.answer
        }
        //console.log(res)
        this.chatList.push(obj)
      })
    }
  },

}
</script>