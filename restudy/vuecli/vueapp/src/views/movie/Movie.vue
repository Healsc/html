<template>
    <div>
        <div class="movie-show">
            <div class="left-img"><img src="" alt=""></div>
            <div class="right-content"></div>
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
                that.showList = res.data.subject_collection_items
                console.log(that.showList)       
            })  
            .catch(function(){
                console.log("error")
            })
        }
    },
}
</script>
<style  scoped>
    .movie-show{
        width: 100%;
        height: 3rem;
        background-color: #ddd;
    }
</style>