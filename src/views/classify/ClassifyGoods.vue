<template>
    <div style="margin-top: 10px;">
        <div style="float: left">
            <ul class="historyGoods">
                <li style="height:20px;text-align: left;padding: 10px;"><span style="background: #ff4e00;margin-right: 3px;color:#ff4e00 ">||</span>浏览历史<span style="float: right;font-size: 12px;padding-top: 5px;">清空</span></li>
                <li v-for="h in historyGoods">
                    <img :src="h.img"/>
                    <p>{{h.name}}</p>
                    <p style="color: red">￥{{h.price}}</p>
                </li>
            </ul>
        </div>
        <div>
            <div class="classify">
                <ul>
                    <li>默认</li>
                    <li>销量</li>
                    <li>价格</li>
                    <li>新品</li>
                    <span style="float: right;width: 100px;border: none;font-size: 12px">共发现130件</span>
                </ul>
            </div>
            <div class="goods">
                <div v-for="g in goods" style="float: left;margin-left: 30px;margin-top: 20px;">
                    <img :src="g.img"/>
                    <p style="color: red">￥{{g.price}}</p>
                    <p>￥{{g.name}}</p>
                    <p class="button"><span style="width: 60px;"><img src="../../assets/heart.png" style="vertical-align: middle;margin-right: 10px;"/>收藏</span><span style="width: 100px;color: #ff4e00"><img style="vertical-align:middle;margin-right: 10px; " src="../../assets/cars.png"/>加入购物车</span></p>
                </div>
                <el-pagination
                        style="text-align:right;width:100%;height:50px;clear: left;float: right;margin-top: 20px;margin-right: 40px;"
                        background
                        layout="prev, pager, next"
                        :total="200">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassifyGoods",
        data(){
            return{
                historyGoods:[
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },

                ],
                goods:[
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },

                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },{
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                    {
                        img:require("../../assets/make_1.jpg"),
                        name:'Dior/迪奥香水2件套装',
                        price:368.00,
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .historyGoods li{
        border: #d8eefc solid 1px;
    }
    .classify{
        width: 910px;
        float: left;
        height: 42px;
        border-bottom: #d8eefc solid 1px;
    }
    .classify ul{
        margin-top: 10px;
    }
    .classify li{
        padding-left: 10px;
        text-align: left;
        float: left;
        height: 25px;
        border: #d8eefc solid 1px;
        width: 60px;
    }
    .classify li:hover{
        color: white;
        background-color: #ff4e00;
    }
    .goods .button span{
        border: gray solid 1px;
        padding: 3px;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #ff4e00;
    }
</style>
