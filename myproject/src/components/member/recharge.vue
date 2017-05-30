<template>
    <div id="recharge" class="G-page">

        <section class="m-lst-gp">
            <div class="m-item">
                <router-link :to="{path:'/rechargeRecord'}"  class="u-lk">
	                <i class="i-icon iconfont icon-empty"></i>
	                <section class="u-info">充值记录<i class="i-enter iconfont icon-arrowright1"></i></section>
	            </router-link>
            </div>
        </section>

        <section class="m-recharge-box">
            <h4 class="m-tit">选择卡豆充值</h4>
            <section class="m-con f__clearfix">
                <a href="javascript:;" class="u-lk on"><i class="iconfont icon-douzi"></i>500</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont icon-douzi"></i>5000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont icon-douzi"></i>16000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont icon-douzi"></i>35000</a>
                <a href="javascript:;" class="u-lk"><i class="iconfont icon-douzi"></i>60000</a>
            </section>
        </section>

        <div class="m-line-info f__clearfix">
            <span class="u-txt f__fl">支付金额</span>
            <span class="u-price f__fr"><em class="vital">100</em>元</span>
        </div>

        <div class="m-sub-box">
            <a href="javascript:;" class="u-btn">立即充值</a>
            <section class="m-info">
                <div class="u-switch" @click.stop="agreement" :class="[isAgreement?'on':'']"><div class="u-ball"></div></div><!-- 开关 -->
                <span class="u-agreement">我同意《<router-link :to="{path:'/agreement'}" class="u-lk">卡豆充值协议</router-link>》</span>
            </section>
        </div>

    </div>
</template>

<script type="text/javascript">

    export default {
        name: "recharge",
        data () {
            return {
                isAgreement: false,
            }
        },
        // 引入组件
        components:{

        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
        methods:{
            agreement(){
                this.isAgreement = !this.isAgreement;
            },
        }
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './recharge.styl'
</style>
