<template>
    <div style="width: 1100px;height:450px;margin: 0 auto;">
        <div style="float: left">
            <ul class="nav">
                <li style="background-color: #ff3c3c;padding-left: 35px;width: 185px;">全部商品分类</li>
                <li v-for="n in navlist">
                    <img :src="n.img" style="vertical-align: middle;margin-left:10px;margin-right: 10px;"/>{{n.name}}
                    <i style="float: right"
                        class="el-icon-arrow-right"></i>
                </li>
            </ul>
        </div>
        <div style="float: left;width: 880px">
            <div>
                <ul class="right_nav">
                    <li v-for="r in rigthNav">
                        {{r.name}}
                    </li>
                    <li style="float: right;font-size: 13px"><img src="../../assets/i_tel.png"
                                                                  style="vertical-align: middle;width: 10px"/> 手机下单优惠更多
                    </li>
                </ul>
            </div>
            <div>
                <div style="float:left;width: 600px;height: 400px;margin-left:10px">
                    <el-carousel height="390px">
                        <el-carousel-item v-for="i in img" :key="i">
                            <img :src="i.img" width="600" height="400"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div style="float: left">
                    <ul class="new_nav">
                        <li style="border-bottom: gray dashed 2px"><span
                                style="float: left;margin: -4px 0 0 5px;color: black;font-size: 18px;">快讯</span><span
                                style="float: right;margin: -4px 5px 0 0">更多<i class="el-icon-caret-right"></i></span>
                        </li>
                        <li v-for="n in new_nav">
                            {{n.name}}
                        </li>
                    </ul>
                    <div style="width: 230px;
        margin-left: 20px;border:  #e6e6e6 solid 1px;">
                        <p style="text-align:left;padding-left:5px;padding-top:10px;height:30px;border-bottom: gray dashed 2px ">
                            1号钱包</p>
                        <p style="text-align:left;padding-left:5px;font-size: 12px;color: gray">收益日结，收益赚High!</p>
                        <img src="../../assets/oneAD.jpg" width="180px"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav",
        data() {
            return {
                img: [
                    {
                        img: require("../../assets/ban1.jpg"),
                    },
                    {
                        img: require("../../assets/ban1.jpg"),
                    },
                    {
                        img: require("../../assets/ban1.jpg"),
                    },{
                        img: require("../../assets/ban1.jpg"),
                    },

                ],
                new_nav: [
                    {
                        name: "【特惠】掬一轮明月 表无尽惦念"
                    },
                    {
                        name: "【特惠】好奇金装成长裤新品上市"
                    },
                    {
                        name: "【特惠】大牌闪购·抢！"
                    },
                    {
                        name: "【特惠】发福利 买车就抢千元油卡"
                    },
                    {
                        name: "【特惠】家电低至五折"
                    },
                ],
                rigthNav: [
                    {
                        name: '首页'
                    },
                    {
                        name: '自营超市'
                    },
                    {
                        name: '1号店'
                    },
                    {
                        name: '1号超市'
                    },
                    {
                        name: '女装'
                    },
                    {
                        name: '美妆'
                    },
                    {
                        name: '1号海购'
                    },
                    {
                        name: '团购'
                    },
                ],
                navlist: [
                    {
                        img: require("../../assets/nav1.png"),
                        name: "进口食品，生鲜",
                    },
                    {
                        img: require("../../assets/nav2.png"),
                        name: "食品、饮料、油" ,
                    },
                    {
                        img: require("../../assets/nav3.png"),
                        name: "母婴、玩具、童装",
                    },
                    {
                        img: require("../../assets/nav4.png"),
                        name: "家具、家庭清洁、制品",
                    },
                    {
                        img: require("../../assets/nav5.png"),
                        name: "没妆、个人护理、洗护",
                    },
                    {
                        img: require("../../assets/nav6.png"),
                        name: "女装、内衣、中老年",
                    },
                    {
                        img: require("../../assets/nav7.png"),
                        name: "鞋靴、鞋包、腕表配饰",
                    },
                    {
                        img: require("../../assets/nav8.png"),
                        name: "男装、运动",
                    },
                    {
                        img: require("../../assets/nav1.png"),
                        name: "手机、小家电、电脑",
                    },
                    {
                        img: require("../../assets/nav1.png"),
                        name: "礼品、充值",
                    }
                ]
            }

        }
    }
</script>

<style scoped>


    * {
        list-style-type: none;
        padding: 0;
        margin: 0;

    }

    li {
        cursor: pointer
    }

    .nav {
        width: 220px;
        background-color: #b01d1d;
    }

    .nav li {
        width: 220px;
        color: white;
        height: 30px;
        font-size: 15px;
        padding-top: 10px;
        text-align: left;
    }

    .nav li:hover {
        background-color: #b02e18;
        width: 100%;
    }

    .right_nav {
        border-bottom: red solid 2px;
        height: 30px;
        padding-top: 10px;
    }

    .right_nav li {
        text-align: left;
        float: left;
        margin-left: 20px;
    }

    .right_nav li:hover {
        color: red;
    }

    .new_nav {
        border: #e6e6e6 solid 1px;
        width: 230px;
        margin-left: 20px;
        height: 230px;
    }

    .new_nav li {
        margin-top: 10px;
        font-size: 15px;
        height: 25px;
        text-align: left;
        color: gray;
    }
</style>
