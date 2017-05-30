<template>
    <div id="record" class="G-page">

        <div class="m-line-gp">
            <section class="m-item">
                <span class="u-txt">充值了<em class="vital">14</em>元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了<em class="vital">14</em>元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了<em class="vital">14</em>元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了<em class="vital">14</em>元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
        </div>

        <section class="m-no-record f__hide">
            <div class="u-con">
                <img src="../../common/img/crying-face.png" class="u-pic" alt="失败脸"/>
                <p class="u-txt">您还没有购买过卡豆~</p>
            </div>
        </section><!-- 没有记录 -->

    </div>
</template>

<script type="text/javascript">

    export default {
        name: "record",
        data () {
            return {

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
  @import './recharge_record.styl'
</style>
