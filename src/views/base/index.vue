<template>
  <div>
    <div id="head">
      <img src="../../assets/logo.png" style="float: left;"/>
      <p style="float: right">您好，欢迎光临1号店！
        <a href="/login">登陆</a>
        <select>
          <option>帮助中心</option>
        </select>
      </p>
    </div>
    <div style="background-color: #fcfcfc">
      <router-view></router-view>
      <div>
        <p>沪ICP备13044278号&nbsp;&nbsp;|&nbsp;&nbsp;合字B1.B2-20130004&nbsp;&nbsp;|&nbsp;&nbsp;营业执照</p>
        <p>Copyright&copy;1号店网上超市2007-2016.ALL Rights Ressved</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',

}
</script>

<style scoped>
  #head{
    height: 80px;
    border-bottom: gray solid 1px;
  }
</style>
