<template>
    <div>
        <header>
            <span class=header>首页</span>
            <span></span>
        </header>
        <nav>
            <ul>
                <li><router-link to="/movie">电影 |</router-link></li> 
                <li><router-link to="/music">音乐 |</router-link></li> 
                <li><router-link to="/book">书籍 |</router-link></li> 
                <li><router-link to="/">图片 </router-link></li> 
            </ul>
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style scoped>
    header{
        position: fixed;
        top: 0;
        height: 1rem;
        width: 100%;
  
    }
    .header{
        font-size: 20px;
        position: fixed;
        left: 0;
    }
    ul{
        position: fixed;
        bottom: 0;
        height: 1rem;

    }
    ul li{
        float: left;
        font-size: 20px;
    }
     
    
</style>