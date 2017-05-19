<template>
  <div id="register">
    <section class="G-step-head">
      <p>我是注册步骤容器。。。</p>
    </section><!-- 注册步骤容器 -->
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
