<template>
  <div id="welcome" class="G-page">
    <section class="G-page-box">
      <div class="G-logo">
        <img src="../../common/img/LOGO.png" alt="商机宝LOGO" />
      </div><!-- logo区域 -->
      <div class="G-logo-txt">
        欢迎使用商机宝     
      </div><!-- 应用标语 -->
      <router-link to="/help" class="G-btn G-btn-primary">注册</router-link><!-- 注册 -->
      <router-link to="/help" class="G-btn G-btn-hollow">已有账号</router-link><!-- 登录 -->
    </section><!-- 登录框区域 -->

    <section class="G-step-foot clearfix">
      <a href="tel:18870836264" class="G-link-txt box__fl">联系客服</a>
      <router-link to="/help" class="G-link-txt box__fr">使用帮助</router-link>
    </section><!-- 底部链接区域 -->
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './welcome.styl'
</style>
