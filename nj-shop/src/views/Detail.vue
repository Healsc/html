<template>
    <div>
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <div class="detail">
            <img :src="detail.img" alt class="detail-img">
            <p class="detail-name">{{detail.name}}</p>
            <p>公司：{{detail.company}}</p>
            <p>产地：{{detail.city}}</p>
            <p class="detail-price">￥{{detail.price}}</p>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                detail:{}
            }
        },
        created() {
            axios({
                url:'http://localhost:3000/product/getDetail',
                method:'get',
                params:{
                    id:this.$route.params.id
                }
            }).then((res)=>{
                this.detail = res.data
                //console.log(res)
            }).catch(err=>{
                console.log(err)
            })
           
        },
    }
</script>

<style lang="scss" scoped>
.detail{
    padding: 0.1rem;
    &-img{
        width: 100%;
        height: 5rem;
    }
    &-name {
        color: #333;
        font-weight: bolder;
    }
    &-price {
        color: #ff7300;
        font-size: 0.4rem;
    }
}
.footer{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    z-index: 3
}
</style>