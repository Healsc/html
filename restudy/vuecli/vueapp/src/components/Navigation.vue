<template>
    <div>
       <header>
           <span @click="routerPush(navList[0])">首页</span>
           <h1>{{title}}</h1>
        </header> 
        <nav>
            <ul>
                <li v-for="(item , index) in navList" :key="index" @click="routerPush(item)">{{item.name}}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:"电影",
            navList:[
                {
                    path:'/movie',
                    name:"电影"
                },{
                    path:'/music',
                    name:"音乐"
                },{
                    path:'/book',
                    name:"书籍"
                },{
                    path:'/chat',
                    name:"聊天"
                }
            ]
        }
    },
    methods: {
        routerPush(e){
            this.$router.push(e.path)
            this.title = e.name
        }
    },
}
</script>
<style scoped>
    header,nav{
        position: fixed;
        background-color: #A0EEE1;
        height: 1rem;
        color: #fff;
    }
    header{
        top:0;
        width: 100%;
       
    }
    header h1{
        line-height: 1rem;
    }
    header span{
        position: absolute;
        left: .4rem;
        top: 50%;
        transform: translateY(-50%);
    }
    nav{
        bottom: 0;
        width: 100%;
       
    }
    nav ul{
        width: 100%;
    }
    nav ul li{
        width: 25%;
        float: left;
        height: 1rem;
        line-height: 1rem;
    }
</style>

