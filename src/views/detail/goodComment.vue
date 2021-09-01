<template>
    <div style="text-align: left;">
        <div style="height: 30px;padding: 8px 0px 0px 30px;color: #ff4e00;background-color: #f6f6f6;border-top: #ff4e00 solid 2px">商品评论</div>
        <div>
            <div style="padding:10px;height: 120px;border: gray solid 1px;margin-top: 10px;">
                <div class="a">
                    <p style="margin-top:20px;font-size: 40px;color: #ff4e00">80.0%</p>
                    <p style="color: #ff4e00;margin-top: -40px;margin-left: 30px">好评度</p>
                </div>
                <div class="b">
                    <p>好评（80%）</p>
                    <p>好评（80%）</p>
                    <p>好评（80%）</p>
                </div>
                <div class="c">
                    <p><el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="success"></el-progress></p>
                    <p><el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"></el-progress></p>
                    <p><el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="exception"></el-progress></p>
                </div>
                <div class="d">
                    <p>购买过珠韵首饰天然银扣珍珠项链的顾客，在收到商品才可以对该店铺商品发表评论</p>
                </div>
                <div class="e">
                    <p>你可对已购买的商品进行评价</p>
                    <el-button>我要评论</el-button>
                </div>
            </div>
            <div class="comment">
                <div v-for="m in commentList" style="margin-top: 20px;border-bottom: gray solid 1px;height: 70px;">
                    <table  cellspacing="0" style="width: 100%;margin-left: 20px;">
                        <tr><td><img width="20" style="vertical-align: middle" :src="m.img"/>{{m.name}}</td><td>颜色分类：<span>{{m.color}}</span></td><td>{{m.comment}}</td></tr>
                        <tr>
                            <td v-if="m.isname">
                                <span>（匿名用户）</span>
                            </td>
                            <td v-else></td>
                            <td>型号：<span>{{m.value}}</span></td><td><span>{{m.time}}</span></td></tr>
                    </table>
                </div>
                <el-pagination
                        style="text-align:right;width:100%;height:50px;clear: left;float: right;margin-top: 20px;margin-right: 40px;"
                        background
                        layout="prev, pager, next"
                        :total="200">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodComment",
        data(){
            return{
                commentList:[
                    {
                        img:require('../../assets/user.jpg'),
                        name:'向死而生',
                        color:'粉色',
                        value:'43cm',
                        comment:'产品很好，香味很喜欢，必须给藏',
                        time:'2015-09-24',
                        isname:true
                    },
                    {
                        img:require('../../assets/user.jpg'),
                        name:'向死而生',
                        color:'粉色',
                        value:'43cm',
                        comment:'产品很好，香味很喜欢，必须给藏',
                        time:'2015-09-24',
                        isname:true
                    },
                    {
                        img:require('../../assets/user.jpg'),
                        name:'向死而生',
                        color:'粉色',
                        value:'43cm',
                        comment:'产品很好，香味很喜欢，必须给藏',
                        time:'2015-09-24',
                        isname:true
                    },
                    {
                        img:require('../../assets/user.jpg'),
                        name:'向死而生',
                        color:'粉色',
                        value:'43cm',
                        comment:'产品很好，香味很喜欢，必须给藏',
                        time:'2015-09-24',
                        isname:true
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #ff4e00;
    }
    .a,.b,.c,.d,.e{
        float: left;
        width: 200px;
        font-size: 12px;
        color: gray;
        margin-left: 20px;
        padding: 0;
    }
    .a{
        width: 120px;
    }
    .b{
        width: 80px;
    }
    .c{
        width: 200px;
        margin-top: 5px;
    }
    .d{
        width: 180px;
        border-left: gray solid 1px;
        margin-top: 10px;
        padding-left: 10px;
        height: 100px;
    }
    .e{
        width: 140px;
        border-left: gray solid 1px;
        margin-top: 10px;
        padding-left: 10px;
        height: 105px;
    }
    .comment{
        font-size: 13px;
    }
    .comment span{
        color: gray;
    }
</style>
