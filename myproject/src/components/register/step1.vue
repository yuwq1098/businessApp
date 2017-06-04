<template>
    <div id="step1">
        <div class="g-mn">
            <section class="m-step-box">
                <div class="m-input-box">
                    <div class="m-row-tit">手机号</div>
                    <div class="m-row-con">
                        <input type="tel" placeholder="请输入手机号" class="m-input-rimless m-input-all"/>
                    </div>
                </div>

                <div class="m-input-box">
                    <div class="m-row-tit">验证码</div>
                    <div class="m-row-con code">
                        <input  type="tel" placeholder="请输入验证码" class="m-input-rimless"/> 
                        <button class="m-btn m-btn-gray right">获取验证码</button>
                    </div>
                </div>

                <div v-if="!isNext" class="bind-user m-btn-gray">下一步</div>
                <router-link :to="{path:'/register/step2'}" v-if="isNext" class="bind-user m-btn-fill">下一步</router-link>
                <router-link :to="{path:'/login'}" id="gotoLogin" class="u-lk f__fr">绑定已有账号</router-link><!-- 登录 -->
            </section><!-- 注册区域 -->
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: "step1",
        data () {
            return {
                isNext: true,
            }
        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './step1.styl'
</style>
