<template>
  <div>
    <aplayer v-if="isShow" :showLrc="true" :music="musicList[0]" :list="musicList"/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  components:{
    Aplayer
  },
  data() {
    return {
      musicList:[],
      isShow:false,
    }
  },
  created(){
    let obj = {
      title:"音乐",
      className:"music"
    }
    this.$emit("changeNav",obj);
    this.getData();
  },
  methods: {
    getData(){
      axios.get("./data/musicdata.json")//public打包后会在跟目录下
      .then((res)=>{
        let arr = res.data.musicData;
        arr.forEach((element,index)=>{
         arr[index].lrc=location.origin+location.pathname+element.lrc
        });
        this.musicList = arr;
        this.isShow = true;
        console.log(arr)
      })
    }
  },
}
</script>