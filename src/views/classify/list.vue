<template>
    <div>
        <Nav></Nav>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 15px;">
            <el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
            <el-breadcrumb-item>珠宝饰品</el-breadcrumb-item>
            <el-breadcrumb-item>珍珠项链</el-breadcrumb-item>
            <el-breadcrumb-item><p
                    style="border: red dashed 1px;width: 100px;height: 25px;margin-top: -8px;padding-top: 8px;">品牌:<span
                    style="color: red">珠韵首饰</span></p></el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <table class="table"   border="1" cellspacing="0" style="margin-top:10px;width: 100%;height: 200px;border: #e7e7e7 solid 1px">
                <tr>
                    <td>
                        <ul>
                            <li>品牌： </li>
                            <li v-for="d1 in data1">
                                {{d1.name}}
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>价格： </li>
                            <li v-for="d2 in data2">
                                {{d2.name}}
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>珍珠颜色： </li>
                            <li v-for="d1 in data1">
                                {{d1.name}}
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>珍珠分类： </li>
                            <li v-for="d1 in data1">
                                {{d1.name}}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Nav from "../universal/nav";
    export default {
        name: "List",
        components: {Nav},
        data(){
            return{
                data1:[
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"艳姐"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                    {name:"1周大福/CHOWTAL FOOK"},
                ],
            data2:[
                {name:"1"},
                {name:"2"},
                {name:"3"},
                {name:"4"},
                {name:"5"},
            ]
            }

        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }


    .table ul{
    }
    .table li{
        float: left;
        margin-left:40px ;
        margin-top: 10px;
        font-size: 12px;
        color: gray;
    }
</style>
