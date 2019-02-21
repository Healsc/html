<template>
    <div>
        <h1>电影</h1>   
        <h2>dian</h2>    
    </div>
</template>
<script>
export default {
     created() {
       let obj = {
           title:"电影",
           className:"movie"
       }
       this.$emit("changeNav",obj);
       this.getData();
   }, 
   methods:{
       getData(){
           let url = 'https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10';
           let proxy = 'https://bird.ioliu.cn/v2?url=';
           axios.get(proxy+url)
           .then(function(res){
               console.log(res);
           })
           .catch(function(){

           })
       }
   }
}
</script>
<style scoped>

</style>