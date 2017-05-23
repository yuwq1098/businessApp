<template>
    <div id="clue" class="G-page">
        <section class="G-tb-group">
            <div class="g__line">
                <span class="g__tit">姓名</span>
                <p class="g__con">陈永兴</p>
            </div>
            <div class="g__line">
                <span class="g__tit">联系方式</span>
                <p class="g__con">15125789692</p>
            </div>
            <div class="g__line">
                <span class="g__tit">地区</span>
                <p class="g__con"><i class="iconfont"></i></p>
            </div>
        </section>

        <section class="G-tb-group">
            <div class="g__line">
                <span class="g__tit">备注</span>
                <div class="g__con">
                    <textarea class="u-txta" placeholder="请填写备注"></textarea>
                    <span>0/300</span>
                </div>
            </div>
        </section>

        <div class="G-link-footer btn-link clearfix">
            <a class="box__fl" href="javascript:;">取消</a>
            <a class="box__fl" href="javascript:;">保存</a>
        </div>

    </div>
</template>

<script type="text/javascript">

    export default {
        name: "clue",
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
  @import './contact.styl'
</style>
