<template>
    <div>
        <Nav></Nav>
        <HotGoods></HotGoods>
        <Goods :bgcolor="numOne.bgcolor" :left-nav="numOne.leftNav" :num="numOne.num" :title="numOne.title" :nav-list="numOne.navList" :goods="numOne.goods2" :right-img="numOne.rigthImg"></Goods>
        <Goods :bgcolor="numOne.bgcolor" :left-nav="numOne.leftNav" :is-advertising="numOne.isAdvertising" :num="numOne.num" :title="numOne.title" :nav-list="numOne.navList" :goods="numOne.goods" :right-img="numOne.rigthImg"></Goods>
        <Goods :bgcolor="numOne.bgcolor" :left-nav="numOne.leftNav" :num="numOne.num" :title="numOne.title" :nav-list="numOne.navList" :goods="numOne.goods" :right-img="numOne.rigthImg"></Goods>
        <HotGoods></HotGoods>
    </div>
</template>

<script>
    import Nav from "./nav";
    import HotGoods from "./hotGoods";
    import Goods from "./goods";
    export default {
        name: "index",
        components: {Goods, HotGoods, Nav},
        data(){
            return{
                numOne:{
                    bgcolor:"#E4F7EC",
                    leftNav:[
                        {
                            name:'进口水果   奇异果    西柚'
                        },
                        {
                            name:'进口水果   奇异果    西柚'
                        },
                        {
                            name:'进口水果   奇异果    西柚'
                        },
                        {
                            name:'进口水果   奇异果    西柚'
                        },
                    ],
                    isAdvertising:true,
                    num:1,
                    title:"个人护理",
                    navList:[
                        {
                            name:"洗发护发"
                        },
                        {
                            name:"洗发护发"
                        },
                        {
                            name:"洗发护发"
                        },
                        {
                            name:"洗发护发"
                        },
                        {
                            name:"洗发护发"
                        },
                    ],
                    goods:[
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                    ],
                    goods2:[
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"test",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"test",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"test",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                        {
                            name:"美宝莲粉饼",
                            price:"260.00",
                            img:require("../../assets/make_1.jpg")
                        },
                    ],
                    rigthImg:[
                        {
                            img:require('../../assets/baby_b1.jpg')
                        },
                        {
                            img:require('../../assets/baby_b2.jpg')
                        }
                    ]
                },

            }
        }
    }
</script>

<style scoped>

</style>
