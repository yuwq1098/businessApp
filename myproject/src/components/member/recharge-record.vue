<template>
    <div id="record" class="G-page">

        
        <div class="G-line-info">
            <section class="m-item">
                <span class="u-txt">充值了14元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了14元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了14元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
            <section class="m-item">
                <span class="u-txt">充值了14元</span>
                <p class="count">+142金豆</p>
                <span class="u-time">2017-05-26 20:24</span>
            </section>
        </div>

        <section class="f__hide">
            <img src="" alt="失败脸"/>
            <p>您还没有购买过卡豆~</p>
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
        name: "record",
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
