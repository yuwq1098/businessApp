<template>
    <div id="register" class="G-page">
        <section class="m-step-head f__clearfix">
            <div class="u-step v1" :class="{on:step>=1}">
                <div class="u-num">1</div>
                <p class="u-tit">注册</p>
            </div>
            <div class="u-step v2" :class="{on:step>=2}">
                <div class="u-num">2</div>
                <p class="u-tit">身份认证</p>
            </div>
            <div class="u-step v3" :class="{on:step==3}">
                <div class="u-num">3</div>
                <p class="u-tit">审核</p>
            </div>
            <div class="u-line">
                <div class="u-line-cd"></div>
            </div><!-- 线 -->
        </section><!-- 注册步骤容器 -->
        <div class="m-isolate20"></div><!-- 分割线 -->
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <step-foot></step-foot><!-- 底部帮助链接 -->
    </div>
</template>

<script type="text/javascript">
import stepFoot from '../public/foot/stepFoot.vue';
    export default {
        name: "register",
        data () {
            return {

            }
        },
        // 引入组件
        components:{
            stepFoot,
        },
        created(){  //第一次触发，这种情况下，和mounted 存在意义一样
            this.stepUpdate();
        },
        //自定义函数（方法）
        methods:{
            //根据路由的变化更新步骤高亮
            stepUpdate(){
                this.step = this.$route.meta.step||1;
                console.log(this.step)
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "stepUpdate"
        }
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import './register.styl'
</style>
