<template>
    <div class="nav">
        <ul>
            <span style="color:black;font-weight:bold;float:left;background-color: #ff3c3c;height: 35px;padding-top: 10px;margin-top: -10px;width: 200px;margin-left: -10px;">全部商品分类</span>
            <li>首页</li>
            <li>自营超市</li>
            <li>1号团</li>
            <li>1号超市</li>
            <li>女装</li>
            <li>美妆</li>
            <li>1号海购</li>
            <li>团购</li>
            <li style="float: right;font-size: 12px;font-weight: normal"><img src="../../assets/i_tel.png"
                                                                              style="vertical-align: middle;width: 10px"/>手机下单惊喜多！
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .nav ul {
        padding: 10px;
        height: 25px;
        border-bottom: red solid 2px;
    }

    .nav li {
        float: left;
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer
    }

    .nav li:hover {
        color: red;
    }
</style>
