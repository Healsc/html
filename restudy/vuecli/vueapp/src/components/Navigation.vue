<template>
    <div :class="activeName"> 
       <header>
           <span @click="routerPush(navList[0])">首页</span>
            <h1>{{activeNav.title}}</h1>
        </header> 
        <nav>
            <ul>
                <li :class="{navClass:item.className == activeName}" v-for="(item , index) in navList" :key="index" @click="routerPush(item)">{{item.name}}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:"电影",
            activeName:'movie',
            navList:[
                {
                    path:'/movie',
                    name:"电影",
                    className:'movie'
                },{
                    path:'/music',
                    name:"音乐",
                    className:'music'
                },{
                    path:'/book',
                    name:"书籍",
                    className:'book'
                },{
                    path:'/chat',
                    name:"聊天",
                    className:'chat'
                }
            ]
        }
    },
    methods: {
        routerPush(e){
            this.$router.push(e.path)
            this.title = e.name
            this.activeName = e.className
        }
    },
    props:['activeNav'],
    computed: {
        prosVal(){
            return this.activeNav.title
        }
    },
    watch: {
        propsVal(){
            this.title = this.activeNav.title
            this.activeName = this.activeNav.activeClass
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
    .movie header,.movie nav{
        background-color: #A0EEE1;
    }
    .music header,.music nav{
        background-color:  #E6CEAC;
    }
    .book header,.book nav{
        background-color: #ECAD9E;
    }
    .chat header,.chat nav{
        background-color: #F4606C;
    }
    nav .navClass{
        font-size:.4rem;
        font-weight: bolder;
    }
</style>

