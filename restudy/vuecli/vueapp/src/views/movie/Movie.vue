<template>
    <div>
        <div class="movie-list">
            <div class="list-left"><img src="" alt=""></div>
            <div class="list-right">
                <div>
                    <h4> {{showList.title}}</h4>
                    <div>
                        主演：<span v-for="(item,index) in showList.actors" :key="index">{{item}}/</span>
                    </div>
                    <div>
                        年份：{{showList.year}}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showList:[]
        }
    },
    created() {
        let obj = {
            title:"电影",
            activeName:"movie"
        }
        this.$emit("changeNav",obj);
        this.getData();
    },
    methods: {
        getData(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=20`
            this.$ajax({
                method: 'get',
                url: proxy+url,
                data: {
                    name: 'wise',
                    info: 'wrong'
                }
            })   
            let that = this
            this.$ajax.get(proxy+url)
            .then(function(res){ 
                that.showList = res.data.subject_collection_items[0]
                   
            })  
            .catch(function(){
               
            })
        }
    },
}
</script>
<style  scoped>
    .movie-list{
        width: 100%;
        height: 3rem;
        text-align: center;
    }
    .movie-list .list-left,.movie-list .list-right{
        height: 3rem;
    }
    .movie-list .list-left{
        float: left;
        background-color: #ddd;
        width: 40%;
    }
    .movie-list .list-right{
        float: right;
        width: 60%;
       
    }
</style>