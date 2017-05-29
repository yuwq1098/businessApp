<template>
    <div id="userInfo" class="G-page">

        <div class="G-user-info-box">
            <div class="u-icon">
                <img src="" alt="用户头像" />
            </div><!-- 用户头像 -->
            <div class="u-tit">喻文强</div>
            <div class="u-con">我的卡豆：
                <span>
                    <i class="i"></i>500
                </span>
            </div>
        </div><!-- 用户信息 -->

        <section class="G-lst-group">
            <div class="m-item">
                <a href="javascript:;" class="u-lk">
	                <i class="iconfont"></i>
	                <p>卡豆充值<i class="iconfont"></i></p>
	            </a>
            </div>
            <div class="m-item">
                <a href="javascript:;" class="u-lk">
	                <i class="iconfont"></i>
	                <p>系统消息<i class="iconfont"></i></p>
	            </a>
            </div>
            <div class="m-item">
                <a href="javascript:;" class="u-lk">
	                <i class="iconfont"></i>
	                <p>使用帮助<i class="iconfont"></i></p>
	            </a>
            </div>
        </section>

        <footer class="G-foot-nav">
            <ul class="clearfix">
                <li class="box__fl">
                    <i class="iconfont"></i>
                    <span>线索</span>
                </li>
                <li class="box__fl">
                    <i class="iconfont"></i>
                    <span>联系人</span>
                </li>
                <li class="box__fl active">
                    <i class="iconfont"></i>
                    <span>我的</span>
                </li>
            </ul>

        </footer>

        
    </div>
</template>

<script type="text/javascript">

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
