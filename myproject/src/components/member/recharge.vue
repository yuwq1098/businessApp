<template>
    <div id="recharge" class="G-page">

        <section class="G-lst-group">
            <div class="m-item">
                <a href="javascript:;" class="u-lk">
	                <i class="iconfont"></i>
	                <p>充值记录<i class="iconfont"></i></p>
	            </a>
            </div>
        </section>

        <section class="G-recharge-box">
            <h4 class="tit">选择卡豆充值</h4>
            <section class="m-con f__clearfix">
                <a href="javascript:;" class="u-lk"><i class="iconfont"></i>500</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont"></i>5000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont"></i>16000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont"></i>35000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont"></i>60000</a>
            </section>
        </section>

        <div class="G-line-info">
            <span class="u-txt">支付金额</span>
            <span class="u-price"><em>100</em>元</span>
        </div>

        <div class="G-sbm-box">
            <a href="javascript:;" class="u-btn">立即充值</a>
            <section class="m-info">
                <span class="u-agreement">我同意《<a href="javascript:;" class="u-lk">卡豆充值协议</a>》</span>
                <div class="u-switch"></div><!-- 开关 -->
            </section>
        </div>

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
        name: "recharge",
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
