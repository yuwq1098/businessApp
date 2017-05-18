<template>
  <div id="register" class="G-page">
    <section class="G-page-box">
      <p>我是注册区域</p>
    </section><!-- 登录框区域 -->

    <section class="G-step-foot clearfix">
      <a :href="'tel:'+author.tel" class="G-link-txt box__fl">联系客服</a>
      <router-link to="/help" class="G-link-txt box__fr">使用帮助</router-link>
    </section><!-- 底部链接区域 -->
  </div>
</template>

<script type="text/javascript">
export default {
  name: "register",
  data () {
    return {
      author: {
        tel: 18870836264,
      },
      data: {
        logoUrl: "../../common/img/LOGO.png",
        logoTit: "商机宝LOGO",
      }
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './register.styl'
</style>
