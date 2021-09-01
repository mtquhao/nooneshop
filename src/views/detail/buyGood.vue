<template>
    <div style="height: 550px;">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 15px;">
            <el-breadcrumb-item :to="{ path: '/' }">所有团购</el-breadcrumb-item>
            <el-breadcrumb-item>包饰</el-breadcrumb-item>
            <el-breadcrumb-item>珠韵首饰
                <sapn style="color: red">冰韵 天然白色正圆s925银扣珍珠项链</sapn>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin-top: 10px">
            <div class="goodImg"><img width="400" src="../../assets/p_big.jpg"/></div>
            <div class="goodValue">
                <p style="font-size: 16px;color: black">珠韵首饰&nbsp;&nbsp;冰韵&nbsp;&nbsp;天然白色正圆S925银扣珍珠项链</p>
                <p style="">全国包邮&nbsp;送妈妈，正圆级淡水珍珠，白色S925银扣链扣，使用方便，尊贵礼物。</p>
                <p style="margin-top: 30px;">本店价格：<span style="color:red;font-size: 16px;font-weight: bold">￥1786</span></p>
                <p style="margin-top: 20px">参考价：￥3886</p>
                <div style="height: 120px;">
                    <div style="margin-top: 20px"><p style="float: left">尺码：</p>
                        <p class="t">43cm</p>
                        <p class="t">45cm</p>
                        <p class="t">50cm</p></div>
                    <div style="margin-top: 10px;"><p style="clear:left;float: left">颜色选择：</p>
                        <p class="t">粉色</p>
                        <p class="t">白色</p></div>
                </div>
                <div>
                    <p><img src="../../assets/sh.png">分享<span style="margin-left: 50px;"><img
                            src="../../assets/heart_h.png"/> 关注商品</span></p>
                    <p style="margin-top: 30px;">
                        <el-input-number v-model="num" controls-position="right" style="width: 100px;" :min="1"
                                         :max="10"></el-input-number>
                        <el-button type="danger" style="margin-left: 30px;"><img src="../../assets/car.png"
                                                                                 style="vertical-align: middle"/>&nbsp;&nbsp;&nbsp;&nbsp;加入购物车
                        </el-button>
                    </p>
                </div>

            </div>
            <div class="advertising">
                <img src="../../assets/sbrand.jpg" width="200"/>
                <p>进入品牌专区</p>
            </div>
            <div style="clear: left;text-align: left;padding-top: 10px;">
                <ul class="goodImgList">
                    <li>
                        <img style="width: 15px;margin-top: 30px;" src="../../assets/r_left.png">
                    </li>
                    <li>
                        <img src="../../assets/p_big.jpg"/>
                    </li>
                    <li><img src="../../assets/p_big.jpg"/></li>
                    <li><img src="../../assets/p_big.jpg"/></li>
                    <li><img src="../../assets/p_big.jpg"/></li>
                    <li><img style="width: 15px;margin-top: 30px;" src="../../assets/r_right.png"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "buyGood",
        data() {
            return {
                num: 1
            }
        }
    }
</script>

<style scoped>
    .goodImg, .goodValue, .advertising {
        float: left;
        margin-left: 10px;
    }

    /deep/ .el-button--danger {
        background-color: #f9530a;
    }

    .goodValue {
        text-align: left;
        font-size: 12px;
        color: gray;
    }

    .advertising {
        margin-top: 10px;
    }

    .advertising p {
        height: 30px;
        padding-top: 10px;
        background-color: #f6f6f6;
    }

    .t {
        float: left;
        height: 25px;
        width: 50px;
        border: gray solid 1px;
        margin-top: 5px;
        padding-top: 7px;
        text-align: center;
        margin-left: 10px;
    }
    .t:hover {
        border: orangered solid 1px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        float: left;
        margin-left: 10px;
    }

    .goodImgList li img {
        width: 90px;
    }
</style>
