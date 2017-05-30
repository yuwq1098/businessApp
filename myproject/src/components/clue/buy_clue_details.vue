<template>
    <div id="buy_clue_details" class="G-page">

        <section class="m-tb-group f__mt20">
            <div class="m-line">
                <span class="m-tit">意向车型</span>
                <section class="m-con">栏板式半挂</section>
            </div>
            <div class="m-line">
                <span class="m-tit">姓名</span>
                <section class="m-con">陈永兴</section>
            </div>
            <div class="m-line">
                <span class="m-tit">联系方式</span>
                <section class="m-con">151****9692</section>
            </div>
            <div class="m-line">
                <span class="m-tit">提车地区</span>
                <section class="m-con">云南 楚雄</section>
            </div>
            <div class="m-line v2">
                <span class="m-tit">标签</span>
                <section class="m-con">独享</section>
            </div>
            <div class="m-line v2">
                <span class="m-tit">备注</span>
                <section class="m-con">卡友车身需要轻量化，想在云南提车，一个月内进行提车，望尽快联系。卡友车身需要轻量化，想在云南提车，一个月内进行提车，望尽快联系。</section>
            </div>
            <div class="m-line">
                <span class="m-tit">询价时间</span>
                <section class="m-con">2017/05/22 20:39</section>
            </div>
        </section>
        
        <!-- 引入底部按钮操作区 -->
        <link-foot :item-size="2">
            <a slot="s-btn-a" href="javascript:;" class="u-btn">共享</a>
            <a slot="s-btn-b" href="javascript:;" :style="{backgroundColor:bgColor}" class="u-btn">独享
                <span class="price">
                    <i class="iconfont icon-douzi"></i>500
                </span>
            </a>
        </link-foot>

    </div>
</template>

<script type="text/javascript">
    
    import linkFoot from '../contacts/sfoot.vue'
    export default {
        name: "buy_clue_details",
        data () {
            return {
                bgColor:'#ffc210',
            }
        },
        // 引入组件
        components:{
            linkFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './buy_clue_details.styl'
</style>
