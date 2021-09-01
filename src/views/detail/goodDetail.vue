<template>
    <div>
        <div style="float: left">
            <ul class="historyGoods">
                <li style="height:20px;text-align: left;padding: 10px;">用户还喜欢</li>
                <li v-for="h in historyGoods">
                    <img :src="h.img"/>
                    <p>{{h.name}}</p>
                    <p style="color: red">￥{{h.price}}</p>
                </li>
            </ul>
        </div>
        <div style="float: left;width: 910px;min-height: 900px">
            <el-tabs  type="border-card">
                <el-tab-pane label="保存搭配">
                    <div class="amount">
                        <div class="a">
                            <img src="../../assets/per_11.jpg"/>
                            <p style="color: #adaeb1">粤通国际珠宝&nbsp;999足金</p>
                            <p style="margin-top: 10px;"><input type="checkbox"><span style="color: #adaeb1">￥76</span></p>
                        </div>
                        <img style="width: 20px;margin-top: 70px" class="b" src="../../assets/jia_b.gif"/>
                        <div class="c">
                            <img src="../../assets/per_11.jpg"/>
                            <p style="color: #adaeb1">粤通国际珠宝&nbsp;999足金</p>
                            <p style="margin-top: 10px;"><input type="checkbox"><span style="color: #adaeb1">￥76</span></p>
                        </div>
                        <img style="width: 20px;margin-top: 70px" class="d" src="../../assets/jia_b.gif"/>
                        <div class="e">
                            <img src="../../assets/per_11.jpg"/>
                            <p style="color: #adaeb1">粤通国际珠宝&nbsp;999足金</p>
                            <p style="margin-top: 10px;"><input type="checkbox"><span style="color: #adaeb1">￥76</span></p>
                        </div>
                        <img style="width: 20px;margin-top: 70px" class="f" src="../../assets/equl.gif"/>
                        <div class="g">
                            <p style="color: #ff4e00">套餐价：￥<span style="font-size: 25px;margin-top: -5px;">2000</span></p>
                            <input value="1" style="text-align: center;margin-top: 10px;"/><br>
                            <el-button type="danger" style="width: 140px;height: 35px;margin-top: 10px;">组合购买</el-button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <el-tabs  type="border-card">
                <el-tab-pane label="商品属性"><GoodsValue></GoodsValue></el-tab-pane>
                <el-tab-pane label="商品详情"><GoodImg></GoodImg></el-tab-pane>
                <el-tab-pane label="商品评论"><GoodComment></GoodComment></el-tab-pane>
            </el-tabs>
            <GoodImg></GoodImg>
            <GoodComment></GoodComment>
        </div>
    </div>
</template>

<script>
    import GoodImg from "./goodImg";
    import GoodsValue from "./goodValue";
    import GoodComment from "./goodComment";
    export default {
        name: "goodDetail",
        components: {GoodComment, GoodsValue, GoodImg},
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

                ],
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
    /deep/ .el-tabs__nav-scroll{
        background-color: #f6f6f6;
    }
    /deep/ .el-button--danger {
        background-color: #f9530a;
    }
    .a,.b,.c,.d,.e,.f,.g{
        float: left;
        margin-left: 10px;
    }
    .g{
        margin-top: 30px;
    }
    .g input{
        width: 70px;
        height:25px;
    }
    .amount img{
        width: 120px;
    }
    .amount input{
        float: left;
        margin-top: 5px;
    }
    .amount span{
        float: right;
    }
</style>
