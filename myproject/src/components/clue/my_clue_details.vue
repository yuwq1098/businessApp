<template>
    <div id="clue" class="G-page">
        <section class="G-tb-group">
            <div class="g__line">
                <span class="g__tit">意向车型</span>
                <p class="g__con">栏板式半挂</p>
            </div>
            <div class="g__line">
                <span class="g__tit">姓名</span>
                <p class="g__con">陈永兴</p>
            </div>
            <div class="g__line">
                <span class="g__tit">联系方式</span>
                <p class="g__con">15125789692</p>
            </div>
            <div class="g__line">
                <span class="g__tit">提车地区</span>
                <p class="g__con">云南 楚雄</p>
            </div>
            <div class="g__line">
                <span class="g__tit">备注</span>
                <p class="g__con">卡友车身需要轻量化，想在云南提车，一个月内进行提车，望尽快联系。</p>
            </div>
            <div class="g__line">
                <span class="g__tit">日期</span>
                <p class="g__con">2017/05/22 20:39</p>
            </div>
        </section>
        
        <div class="G-link-footer btn-link clearfix">
            <a class="box__fl" href="javascript:;">返回</a>
            <a class="box__fl" href="javascript:;">编辑</a>
            <a class="box__fr" href="javascript:;">添加跟进记录</a>
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
  @import './clue.styl'
</style>
