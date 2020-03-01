<template>
  <div class="home">
       <div class="clearfix">
          <div class="header">
              <van-nav-bar title="商城">
                <van-icon name="search" slot="left"></van-icon>
                <van-icon name="cart" slot="right"></van-icon>
              </van-nav-bar>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.clearfix{
  height: 1rem;
}
.header{
  position: fixed;
  top: 0;
  height: 2rem;
  width: 100%;
}
</style>
