<template>
    <div>
        <header>
            <span>首页</span>
            <h1>电影</h1>
        </header>
        <nav>
            <ul>
                <li @click="routerPush(item)" v-for="(item,index) in list" :key="index">{{item.name}}</li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
            {
                name:"电影",
                routerPath:"/",
            },{
                name:"音乐",
                routerPath:"/music",
            },{
                name:"书籍",
                routerPath:"/book",
            },{
                name:"聊天",
                routerPath:"/chat",
            }
        ]
        }
    },
    methods:{
        routerPush(obj){
            this.$router.push(obj.routerPath);
        }
    }
}
</script>
<style scoped>
    header{
        position: fixed;
        top: 0;
        height: 1rem;
        width: 100%;
        background-color: #ddd;
    }
    header h1{
        height: 1rem;
        line-height: 1rem;
    }
    header span{
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    nav{
        position: fixed;
        bottom: 0;
        height: 1rem;
        width: 100%;
        background-color:#ddd;
    }
    nav ul{
        width: 100%;
    }
    nav li{
        float:left;
        width: 25%;
        height: 1rem;
        line-height: 1rem;
    }
    
  
</style>