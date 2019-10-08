<template>
  <div id="app">
    <div class="box">hello vue</div>
    
  </div>
</template>

<style lang="scss">
  .box{
    width: 100%;
    height: 200px;
    background-color:brown;
    text-align: center;
    line-height: 200px;
  }
  @media(max-width:600px){
    .box{
      width: 50%;
      background-color:cadetblue;
    }
  }
</style>
