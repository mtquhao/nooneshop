<template>
    <div>
        <div style="width: 600px;margin: 0 auto;">
            <div class="advertising">
                <img src="../assets/b1.png"/>
                <p class="advertisingText">正品保障</p>
                <p>正品行货&nbsp;放心购买</p>
            </div>
            <div class="advertising">
                <img src="../assets/b2.png"/>
                <p class="advertisingText">满38包邮</p>
                <p>满38包邮&nbsp;免运费</p>
            </div>
            <div class="advertising">
                <img src="../assets/b3.png"/>
                <p class="advertisingText">天天低价</p>
                <p>天天低价&nbsp;畅选无忧</p>
            </div>
            <div class="advertising">
                <img src="../assets/b4.png"/>
                <p class="advertisingText">准时送达</p>
                <p>收获时间由你做主</p>
            </div>
        </div>
        <div style=" clear:left;width: 1000px;margin: 0 auto;text-align: left;height: 200px;border-bottom: gray solid 1px">
            <div class="correlation">
                <p>新手上路</p>
                <ul>
                    <li>售后流程</li>
                    <li>购物流程</li>
                    <li>订购方式</li>
                    <li>隐私声明</li>
                    <li>推荐分享说明</li>
                </ul>
            </div>
            <div class="correlation">
                <p>配送与支付</p>
                <ul>
                    <li>货到付款区域</li>
                    <li>配送支付查询</li>
                    <li>支付方式说明</li>
                </ul>
            </div>
            <div class="correlation">
                <p>会员中心</p>
                <ul>
                    <li>资金管理</li>
                    <li>我的收藏</li>
                    <li>我的订单</li>
                </ul>
            </div>
            <div class="correlation">
                <p>服务保证</p>
                <ul>
                    <li>退换货原则</li>
                    <li>售后服务保证</li>
                    <li>产品质量保证</li>
                </ul>
            </div>
            <div class="correlation">
                <p>联系我们</p>
                <ul>
                    <li>网站故障报告</li>
                    <li>购物资讯</li>
                    <li>投诉与建议</li>
                </ul>
            </div>
            <div style="width: 300px;float: left;margin-left: 100px">
                <div style="float: left">
                    <img src="../assets/er.gif"/>
                    <p style="font-size: 12px;font-family:'仿宋'">扫一扫关注我们！</p>
                </div>
                <div style="float: left;margin-left: 20px;">
                    <p style="font-size: 12px;color: gray"><img src="../assets/wbf.png" style="vertical-align: middle;width: 25px;margin-right: 10px"/>新浪微博 </p>
                    <p style="font-size: 12px;color: gray"><img src="../assets/wbf.png" style="vertical-align: middle;width: 25px;margin-right: 10px"/>腾讯微博 </p>
                    <p style="font-size: 10px;color: gray;margin-left:0px ">服务热线：</p>
                    <p style="color: red">400-123-4567</p>
                </div>
            </div>
        </div>
        <div>
            <p style="font-size: 12px;color: gray">备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com Copyright&copy;&nbsp;2007-2016.All Rights Reserved.复制必究.Technical Support Dgg Group</p>
            <img src="../assets/b_1.gif"/>
            <img src="../assets/b_2.gif"/>
            <img src="../assets/b_3.gif"/>
            <img src="../assets/b_4.gif"/>
            <img src="../assets/b_5.gif"/>
            <img src="../assets/b_6.gif"/>


        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
    * {
        list-style-type: none;
    }

    .advertising {
        float: left;
        margin-left: 50px;
    }

    .advertising .advertisingText {
        font-size: 15px;
        height: 10px;
        color: black;
    }

    .advertising p {
        font-size: 10px;
        color: gray;
    }

    .correlation {
        float: left;
        margin-left: 40px;
    }

    .correlation ul {
        margin-left: -40px;
    }

    .correlation li {
        font-size: 12px;
        color: gray;
    }
</style>
