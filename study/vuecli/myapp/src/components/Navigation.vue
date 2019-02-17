<template>
    <div>
        <header class="header">
            <span>首页</span>
            <h1>电影</h1>
        </header>
        <nav class="nav">
            <ul>
                <li v-on:click="routerPush(item)" v-for="(item,index) in navList" :key=index>{{item.name}}</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList:[
                {
                    name:"电影",
                    routerPath:"/",
                    activeClass:"movie",
                },{
                    name:"音乐",
                    routerPath:"/music",
                    activeClass:"music",
                },{
                    name:"书籍",
                    routerPath:"/book",
                    activeClass:"book",
                },{
                    name:"唠嗑",
                    routerPath:"/chat",
                    activeClass:"chat",
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