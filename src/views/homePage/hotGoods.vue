<template>
    <div style="height: 340px;width: 1100px;margin: 0 auto;">
        <div style="float: left;">
            <img src="../../assets/l_img.jpg"/>
            <p style="background-color: #d8eefc;margin-top: -5px">
                <span style="background: #ff4e00;color: white;padding-right: 8px;">￥53.00</span>
                <span style="margin-left:10px;color: #f5947b;font-size: 13px;">-16R</span>
            </p>
        </div>
        <div style="float: right;width: 888px;">
            <ul class="hotList">
                <li v-for="h in hotList">
                    <p style="padding-top:8px;position: relative;top: 10px;height: 32px;width: 40px;border-radius: 20px;background-color: #ff4e00;left: 30px;color: white">热门</p>
                    <img :src="h.img" style="margin-top: -35px"/>
                    <p>{{h.name}}</p>
                    <p style="font-size: 10px;color: gray">{{h.detail}}</p>
                    <p><span style="color: red">￥{{h.money}}</span><span style="color: gray;font-size: 10px;margin-left: 10px;">{{h.discounts}}R</span></p>
                </li>
            </ul>
        </div>
        <img src="../../assets/mban_2.jpg" width="1100" style="margin-top: 10px;"/>
    </div>
</template>

<script>
    export default {
        name: "hotGoods",
        data(){
            return{
                hotList:[]

            }
        },
        created(){
            this.quhao()
        },
        methods:{
            quhao(){
                this.hotList=[{
                    img:require("../../assets/hot1.jpg"),
                    name:"德国进口1",
                    detail:"德亚全脂纯牛奶200ml*48盒",
                    money:189,
                    discounts:26
                },
                    {
                        img:require("../../assets/hot2.jpg"),
                        name:"德国进口2",
                        detail:"德亚全脂纯牛奶200ml*48盒",
                        money:189,
                        discounts:26
                    },
                    {
                        img:require("../../assets/hot3.jpg"),
                        name:"德国进口3",
                        detail:"德亚全脂纯牛奶200ml*48盒",
                        money:189,
                        discounts:26
                    },
                    {
                        img:require("../../assets/hot4.jpg"),
                        name:"德国进口",
                        detail:"德亚全脂纯牛奶200ml*48盒",
                        money:189,
                        discounts:26
                    },]
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .hotList{
        height: 208px;
    }
    .hotList li{
        float: left;
        width: 220px;
        height: 208px;
        border: gray solid 1px;
    }
    .hotList li:hover{
        border: red solid 1px;
    }
</style>
