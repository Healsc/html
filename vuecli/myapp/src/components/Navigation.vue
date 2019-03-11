<template>
<<<<<<< HEAD
    <div :class="activeClass">
        <header>
            <span @click="routerPush(navList[0])">首页</span>
            <h1>{{nowTitle}}</h1>
        </header>   
        <nav>
            <ul>
                <li v-for="(item,index) in navList" :key="index" :class="{'active':item.className == activeClass}" @click="routerPush(item)">
                    {{item.name}}
                </li>
=======
    <div>
        <header class="header">
            <span>首页</span>
            <h1>电影</h1>
        </header>
        <nav class="nav">
            <ul>
                <li v-on:click="routerPush(item)" v-for="(item,index) in navList" :key=index>{{item.name}}</li>
>>>>>>> 26b2b5da26324dbfb6f776d4246f5c398be825a6
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowTitle:"电影",
            activeClass:"movie",
            navList:[
            {
                name:"电影",
                routerPath:"/",
                className:"movie",
            },{
                name:"音乐",
                routerPath:"/music",
                className:"music"
            },{
                name:"书籍",
                routerPath:"/book",
                className:"book"
            },{
                name:"聊天",
                routerPath:"/chat",
                className:"chat"
            }
        ]
        }
    },
    methods: {
        routerPush(obj){
            this.$router.push(obj.routerPath);
            console.log(123)
        }
    },
}
</script>

<style scope>
    .header{
        height: 1rem;
        width: 100%;
        background-color: #ddd;
        position: fixed;
        top: 0;
    }
    .header span{
        position: absolute;
        left: 0.25rem;
        height: 1rem;
        line-height:1rem;
        color: #fff;
    }
    .header h1{
        height: 1rem;
        line-height: 1rem;
        color: #fff;
    }
    .nav{
        height:1rem;
        width: 100%;
        background-color: aqua;
        position: fixed;
        bottom: 0;
    }
    .nav ul{
        width: 100%;
    }
    .nav ul li{
        width: 25%;
        float: left;
        text-align: center;
        height: 1rem;
        line-height:1rem;
        color: #fff;
    }
</style>