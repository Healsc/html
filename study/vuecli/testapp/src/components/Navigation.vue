<template>
    <div v-bind:class="activeClass">
        <header>
            <span @click="routerPush(navList[0])">首页</span>
            <h1>{{acriveTitle}}</h1>
        </header>
        <nav>
            <ul>
                <li v-for="(item,index) in navList" :key="index" @click="routerPush(item)">{{item.name}}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            acriveTitle:"电影",
            activeClass:"movie",
            navList:[
                {
                    name:"电影",
                    routerPath:"/",
                    className:"movie",
                },{
                    name:"音乐",
                    routerPath:"/music",
                    className:"music",
                },{
                    name:"书籍",
                    routerPath:"/book",
                    className:"book",
                },{
                    name:"唠嗑",
                    routerPath:"/chat",
                    className:"chat",
                }
            ]
        }
    },
    methods: {
        routerPush(obj){
            this.$router.push(obj.routerPath);
            this.acriveTitle = obj.name;
            this.activeClass = obj.className;
        }
    },
}
</script>
<style scoped>
    header,nav{
        color: #fff;
        position: fixed;
        width: 100%;
        height: 1rem;
        background-color: rgb(33,150,241);
        text-align: center;
    }
    header{
        top: 0;
    }
    header span{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    header h1{
        height: 1rem;
        line-height:1rem;
    }
    nav{
        bottom: 0;
    }
    nav ul{
        width: 100%;
    }
    nav li{
        width: 25%;
        color: #ddd;
        float: left;
        height: 1rem;
        line-height: 1rem;
    }
    .movie header,.movie nav{
        background-color:rgb(33,150,243);
    }
     .music header,.music nav{
         background-color: rgb(0, 150, 136);
    }
     .book header,.book nav{
        background-color: rgb(121, 85, 72);
    }
    .chat header,.chat nav{
        background-color: rgb(63, 81, 181);
    }
</style>

