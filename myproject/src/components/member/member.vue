<template>
    <div id="userInfo" class="G-page">

        <div class="G-user-info-box">
            <div class="m-pic">
                <img src="../../common/img/user-icon.jpeg" alt="用户头像" />
            </div><!-- 用户头像 -->
            <section class="m-con">
                <div class="u-tit">喻文强</div>
                <div class="u-txt">我的卡豆：
                    <span class="u-pirce">
                        <i class="iconfont icon-douzi"></i>500
                    </span>
                </div>    
            </section>
        </div><!-- 用户信息 -->

        <section class="G-lst-group">
            <div class="m-item">
                <router-link :to="{path:'/recharge'}" class="u-lk">
                    <i class="i-icon iconfont icon-douzi"></i>
                    <section class="u-info">卡豆充值<i class="i-enter iconfont icon-arrowright1"></i></section>
                </router-link>
            </div>
            <div class="m-item">
                <router-link :to="{path:'/massage'}" class="u-lk">
	                <i class="i-icon iconfont icon-xitongxiaoxi2"></i>
	                <section class="u-info">系统消息<i class="i-enter iconfont icon-arrowright1"></i></section>
	            </router-link>
            </div>
            <div class="m-item">
                <a href="javascript:;" class="u-lk">
	                <i class="i-icon iconfont icon-shiyongbangzhu1"></i>
	                <section class="u-info">使用帮助<i class="i-enter iconfont icon-arrowright1"></i></section>
	            </a>
            </div>
        </section>
        
        <!-- 引入底部 -->
        <c-foot :nav-item="3"></c-foot>

    </div>
</template>

<script type="text/javascript">
    import cFoot from '../public/foot/footer.vue'

    export default {
        name: "userInfo",
        data () {
            return {
                author: {
                    tel: 18870836264,
                },
                data: {
                    logoUrl: "static/img/LOGO.png",
                    logoTit: "商机宝LOGO",
                },
                value: false,
            }
        },
        // 引入组件
        components:{
            cFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './member.styl'
</style>
