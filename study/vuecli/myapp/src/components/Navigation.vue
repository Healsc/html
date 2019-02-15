<template>
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
            </ul>
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
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
    props:["navVal"],
    methods:{
        routerPush(obj){
            this.$router.push(obj.routerPath);
            this.nowTitle = obj.name;
            this.activeClass = obj.className;
        }
    },
    computed: {
        propsVal(){
        return this.navVal.title
        }
  },
    watch:{
        propsVal(){
             console.log(this.navVal.className);
            this.nowTitle = this.navVal.title;
            this.activeClass = this.navVal.className;
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
        background-color:rgb(33, 150, 243);
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
        background-color:rgb(33, 150, 243);
    }
    nav ul{
        width: 100%;
    }
    nav li{
        color: #ddd;
        float:left;
        width: 25%;
        height: 1rem;
        line-height: 1rem;
    }
    nav li.active{
        color: #fff;
        font-size: 16px;
    }
    .movie header,.movie nav{
        background-color: rgb(33, 150, 243);
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