<template>
    <div id="step1" class="G-page">
        <section class="G-page-box">
            <my-register></my-register>
            <section class="G-step-box">
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

                <div data-v-635149b8="" class="bind-user">注册新帐号</div>
                <router-link to="/login" class="G-btn G-btn-hollow">已有账号</router-link><!-- 登录 -->
                
            </section><!-- 注册区域 -->
        </section>
        
        <step-foot></step-foot><!-- 底部帮助链接 -->
    </div>
    
</template>

<script type="text/javascript">
    import myRegister from './register.vue';
    import stepFoot from '../public/foot/stepFoot.vue';

    export default {
        name: "step1",
        data () {
            return {
                author: {
                    tel: "18870836264",
                },
                data: {
                    logoUrl: "",
                    logoTit: "商机宝LOGO",
                }
            }
        },
        // 引入组件
        components:{
            myRegister,
            stepFoot,
        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './register.styl'
</style>
