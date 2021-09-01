<template>
    <div class="form">
        <h3>1号店注册</h3>
        <el-input placeholder="手机号"/>
        <el-input style="width: 180px" placeholder="验证码"/><el-button style="background-color: gray;color: white;width: 110px;height: 40px;margin-left: 5px;">获取验证码</el-button>
        <el-input style="margin-top: 10px" type="password" placeholder="设置密码"/>
        <el-input style="margin-top: 10px" placeholder="确认密码"/>
        <p style="margin-top: 10px;">点击注册，表示您同意1号店<a href="#">《服务协议》</a></p>
        <el-button type="danger">同意协议并注册</el-button>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
    *{
        margin: 0;
    }
     input{
        height: 40px;
        width: 300px;
        margin-top: 10px;
    }
     .form{
        width: 300px;
        margin: 0 auto;
        text-align: center;
    }
     .form button{
        height: 45px;
        width: 300px;
        margin-top: 10px;
        color: white;
    }
     p{
         font-size: 10px;
         color: gray;
     }
</style>
