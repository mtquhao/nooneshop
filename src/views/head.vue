<template>
    <div style="height: 150px;">
        <div class="nav">
            <p style="float: left;font-size: 12px;margin-left: 60px">配送至：四川</p>
            <ul style="float: right;margin-right: 20px">
                <li>你好请登录</li>
                <li><el-link type="danger" href="/register">免费注册</el-link>|我的订单|</li>
                <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            收藏夹<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          客户服务<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          网站导航<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>狮子头</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    |关于我们：<img src="../assets/sh1.png"/><img  style="margin-left: 5px" src="../assets/sh2.png"/>
                </li>
                <li>
                    |手机版<img style="vertical-align: middle;margin-left: 5px" src="../assets/i_tel.png" width="10px"/>
                </li>
            </ul>
        </div>
        <div style="width: 1000px;margin: 30px auto">
            <img style="float: left" src="../assets/logo.png">
            <div style="float: left;width: 600px;">
                <el-input style="width: 500px;border: red solid 1px;border-radius: 5px"></el-input><el-button style="position: relative;left: -70px" type="danger" @click="classify">搜索</el-button>
                <ul style="margin-left: -30px">
                    <li>咖啡</li>
                    <li>iphone 6s</li>
                    <li>新鲜美食</li>
                    <li>蛋糕</li>
                    <li>日用品</li>
                    <li>连衣裙</li>
                </ul>
            </div>
            <img src="../assets/car.png" style="position: relative;top:12px;left: 60px"/>
            <el-button style="float: right;width: 100px">购物车</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head",
        methods:{
            classify(){
                this.$router.push({path:'/classify/index'})
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
    }
    .nav{
        padding-top: 10px;
        background-image: linear-gradient(gray,white);
        height: 30px;
        width: 100%;
    }
    li{
        font-size: 13px;
        float: left;
        list-style-type: none;
        margin-left: 10px;
    }
</style>
