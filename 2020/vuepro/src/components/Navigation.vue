<template>
    <div :class="active">
        <header > 
            <h1>{{title}}</h1>
            <span @click="routerPush(navList[0])">首页</span>
        </header>
       <nav>
           <ul>
               <li :class="{highlight:active == item.activeClass}" @click="routerPush(item)" v-for="(item,index) in navList" :key="index">{{item.name}}</li>
           </ul>
       </nav>
    </div>
</template>
<script>
export default {
    props:[
        'refresh'
    ],
    name:"Navigation", 
    data(){
        return{
            title:"电影",
            active:"movie",
            navList:[
                {
                    name:"电影",
                    path:"/",
                    activeClass:"movie",
                },{
                    name:"音乐",
                    path:"/music",
                    activeClass:"music",
                },{
                    name:"书籍",
                    path:"/book",
                    activeClass:"book",
                },{
                    name:"聊天",
                    path:"/chat",
                    activeClass:"chat",
                }
            ]
        }
    },
    methods: {
        routerPush(obj){
            this.$router.push(obj.path);
            this.active = obj.activeClass;
            this.title = obj.name;
        }
    },
    computed: {
        refreshName(){
            return this.refresh.name
        },
        refreshActiveClass(){
            return this.refresh.activeClass
        }
    },
    watch: {
        refreshName(){
            this.title=this.refresh.name,
            this.active=this.refresh.activeClass
        }
    },
    
}
</script>
<style scoped>
    header,nav{
        position: fixed;
        background-color:blue;
    }
    header{
        top: 0;
        width: 100%;
        height: 1rem;
    }
    nav{
        bottom: 0;
        width: 100%;
        height: 1rem;
        
    }
    header h1{
        text-align:center;
        line-height:1rem;
    }
    header span{
        position:absolute;
        left: 10px;
        top: 0;
        line-height: 1rem;
    }
    nav ul{
        width: 100%;
        display: flex;
    }
    nav ul li{
        flex-grow: 1;
        text-align:center;
        line-height: 1rem;
        color: #fff;
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
    .highlight{
        font-weight: 200;
        font-size: 18px
    }
</style>