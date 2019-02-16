<template>
  <div>
    <div class="send-btn">
      <input type="text">
      <button @click="send">发送</button>
    </div>
    <div>
      <ul>
        <li>
          <div class="right">
            <span>right</span>
          </div>
          <div class="left">
            <span>left</span>
            </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<style scoped>
  .send-btn{
    height: 1rem;
    width: 100%;
    background-color: rgba(63, 81, 181,.7);
    position: fixed;
    bottom:1rem;
    text-align: center;
    line-height: 1rem;
  }
</style>

<script>
export default {
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
      return timestamp;
    },
    send(){
      let params = {
        app_id:"2111882338",
        time_stamp:this.getTimeStamp(),
        nonce_str:"",
        sign:"",
        session:"",
        question:"",
      }
      console.log(params.time_stamp)
      let appkey = "luAmnq5y8Q4f29Qj";
    }
  },
}
</script>