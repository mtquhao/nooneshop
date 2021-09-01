<template>
    <div style="width: 1100px;margin:0 auto;margin-bottom: 10px">
        <div>
            <ul class="nav">
                <li style="float: left">
                    <div>
                        <p class="num">{{num}}F</p>
                        <span style="color: #ff4e00">{{title}}</span>
                    </div>
                </li>
                <li style="float: right">
                    <ul>
                        <li v-for="n in navList" style="font-size: 12px;color: gray;padding-top: 4px;">
                            {{n.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <table  cellspacing="0">
                <tr>
                    <td style="width: 200px">
                        <div class="leftNav" :style="{background:bgcolor}">
                            <div>
                                <img src="../../assets/fre_r.jpg" width="200"/>
                            </div>
                            <div style="">
                                <div v-for="l in leftNav" style="border-bottom: gray dashed 1px;height: 20px;font-size: 13px;padding-top: 5px">
                                    {{l.name}}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div v-for="g in goods" style="float:left;width: 212px;height: 202px;border: #efefef solid 1px;overflow: hidden">
                            <p style="font-size: 12px;margin-top: 20px;">{{g.name}}</p>
                            <p style="color: #ff4e00;font-size: 20px;margin-top: 10px">￥{{g.price}}</p>
                            <img :src="g.img"/>
                        </div>
                    </td>
                    <td style="width: 250px">
                        <img v-for=" r in rightImg" :src="r.img" width="250" height="200"/>
                    </td>
                </tr>
            </table>
        </div>
        <img v-if="isAdvertising" src="../../assets/mban_2.jpg" width="1100" style="margin-bottom: 10px;"/>
    </div>
</template>

<script>
    export default {
        name: "goods",
        data(){
            return{

            }
        },
        props: {
            bgcolor:"",
            num: {
                type: Number
            },
            title: {
                type: String
            },
            navList: [],
            goods:[],
            rightImg:[],
            isAdvertising:{
                type:Boolean,
                delete:false
            },
            leftNav:[],
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .leftNav{
        height: 100%;
    }

    .num {
        float: left;
        padding-top: 14px;
        margin-top: -10px;
        width: 29px;
        height: 20px;
        background-image: url('../../assets/floor.png');
    }

    .nav {
        height: 30px;
        border-bottom: #ff4e00 solid 2px;
        padding-top: 5px;
    }

    .nav li {
        float: left;
        margin-left: 15px;
        margin-right: 5px;
        cursor: pointer
    }

    table {
        width: 100%;
        height: 400px;
    }
</style>
