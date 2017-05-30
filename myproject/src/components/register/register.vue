<template>
    <div id="register">
        <section class="m-step-head f__clearfix">
            <div class="u-step v1 on">
                <div class="u-num">1</div>
                <p class="u-tit">注册</p>
            </div>
            <div class="u-step v2 on">
                <div class="u-num">2</div>
                <p class="u-tit">身份认证</p>
            </div>
            <div class="u-step v3">
                <div class="u-num">3</div>
                <p class="u-tit">审核</p>
            </div>
            <div class="u-line">
                <div class="u-line-cd v2"></div>
            </div><!-- 线 -->
        </section><!-- 注册步骤容器 -->
        <div class="m-isolate20"></div><!-- 分割线 -->
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "register",
    data () {
        return {

        }
    }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import './register.styl'
</style>
