<template>
    <div id="clue" class="G-page">
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
                <section class="m-con">15125789692<i class="iconfont icon-dianhua"></i></section>
            </div>
            <div class="m-line">
                <span class="m-tit">提车地区</span>
                <section class="m-con">云南 楚雄</section>
            </div>
            <div class="m-line v2">
                <span class="m-tit">备注</span>
                <section class="m-con">卡友车身需要轻量化，想在云南提车，一个月内进行提车，望尽快联系。</section>
            </div>
            <div class="m-line">
                <span class="m-tit">日期</span>
                <section class="m-con">2017/05/22 20:39</section>
            </div>
        </section>

        <!-- 引入底部按钮操作区 -->
        <link-foot :item-size="3">
            <a slot="s-btn-a" href="javascript:;" class="u-btn">返回</a>
            <a slot="s-btn-b" href="javascript:;" class="u-btn">编辑</a>
            <a slot="s-btn-b" href="javascript:;" class="u-btn">添加跟进记录</a>
        </link-foot>

    </div>
</template>

<script type="text/javascript">
    
    import linkFoot from '../contacts/sfoot.vue'
    export default {
        name: "clue",
        data () {
            return {
                 
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
  @import './my_clue_details.styl'
</style>
