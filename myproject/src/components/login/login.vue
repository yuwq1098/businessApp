<template>
    <div id="login" class="G-page">
        <section class="G-login-box">
            <div class="G-input-box">
                <div class="G-row-tit">手机号</div>
                <div class="G-row-con">
                    <input type="tel" placeholder="请输入手机号" class="G-input-rimless G-input-all"/>
                </div>
            </div>

            <div class="G-input-box">
                <div class="G-row-tit">验证码</div>
                <div class="G-row-con">
                    <input  type="tel" placeholder="请输入验证码" class="G-input-rimless"/> 
                    <button class="G-btn G-btn-gray right">获取验证码</button>
                </div>
            </div>

            <button data-v-635149b8="" disabled="disabled" class="btn-block btn-disabled">绑定</button>

            <div data-v-635149b8="" class="bind-user">注册新帐号</div>
            <router-link to="/login" class="G-btn G-btn-hollow">已有账号</router-link><!-- 登录 -->
            
        </section><!-- 登录框区域 -->

        <section class="G-step-foot clearfix">
            <a :href="'tel:'+telephone" class="G-link-txt box__fl">联系客服</a>
            <router-link to="/help" class="G-link-txt box__fr">使用帮助</router-link>
        </section><!-- 底部链接区域 -->
    </div>
</template>

<script type="text/javascript">
export default {
  name: "login",
  data () {
    return {
      author: "Geek.Yu",
      telephone: 18870836264
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './login.styl'
</style>
