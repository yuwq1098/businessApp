<template>
  <div id="welcome" class="G-page">
    <section class="G-page-box">
      <div class="G-logo">
        <img src="../../common/img/LOGO.png" alt="商机宝LOGO" />
      </div><!-- logo区域 -->
      <div class="G-logo-txt">
        欢迎使用商机宝     
      </div><!-- 应用标语 -->
      <button class="G-btn G-btn-primary">注册</button><!-- 注册 -->
      <button class="G-btn G-btn-hollow">已有账号</button><!-- 登录 -->

      <div class="G-step-foot">
        <a href="tel:18870836264" class="G-link-txt">联系客服</a>
        <router-link to="/help" class="G-link-txt">使用帮助</router-link>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "welcome",
  data () {
    return {
      author: "Geek.Yu"
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/app'
  @import './welcome.styl'
  .G-btn-primary
    background-color $c_orange04

</style>
