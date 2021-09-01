<template>
    <div id="main">
        <img src="../../assets/loadimg.jpg">
        <div style="float: right;text-align: left;width: 300px">
            <p style="height: 0px">1号店用户登陆<el-link type="primary" href="/register" style="float: right">注册账号</el-link></p><br>
            <el-input prefix-icon="el-icon-user-solid" v-model="input" placeholder="邮箱/手机/用户名"></el-input>
            <el-input prefix-icon="el-icon-key" style="margin-top: 10px" v-model="input" placeholder="密码"></el-input>
            <p><el-checkbox v-model="checked">自动登陆</el-checkbox><el-link type="info" style="float: right">忘记密码？</el-link></p>
            <el-button type="danger" style="width: 100%" @click="login">登陆</el-button>
            <p>更多合作网站账号登陆</p>
            <div class="more">
                <img style="margin-left: 0" src="../../assets/qqf.png"/>
                <img src="../../assets/wbf.png"/>
                <img src="../../assets/zhif.png"/>
                <img src="../../assets/wxf.png"/>
                <span style="font-size: 8px;color: gray;margin-left: 30px">更多合作网站</span><img src="../../assets/turnb.png" style="position:relative;top:-25px;left:250px;width: 20px;height: 20px"/>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            login(){
                this.$router.push({path:'/index'})
            }
        }
    }
</script>

<style scoped>
    #main{
        width: 1000px;
        height: 350px;
        margin: 0 auto;
    }
    .more img{
        width: 30px;
        margin-left: 20px;
        vertical-align: middle;
    }
</style>
