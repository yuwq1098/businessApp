<template>
    <div id="clue" class="G-page">
        <section class="m-line-gp f__mt20">
            <div class="m-gp-box">
                <span class="u-tit vital">姓名</span>
                <section class="u-con">陈永兴</section>
            </div>
            <div class="m-gp-box">
                <span class="u-tit vital">联系方式</span>
                <section class="u-con">15125789692</section>
            </div>
            <div class="m-gp-box">
                <span class="u-tit">地区</span>
                <section class="u-con"><i class="iconfont icon-arrowright1"></i></section>
            </div>
        </section>

        <section class="m-line-gp f__mt20">
            <div class="m-gp-box v2">
                <span class="u-tit">备注</span>
                <section class="u-con">
                    <textarea class="u-txta" placeholder="请填写备注"></textarea>
                    <div class="u-word">0/300</div>
                </section>
            </div>
        </section>

        <!-- 引入底部按钮操作区 -->
        <link-foot :item-size="2">
            <a slot="s-btn-a" href="javascript:;" class="u-btn">取消</a>
            <a slot="s-btn-b" href="javascript:;" class="u-btn">保存</a>
        </link-foot>

    </div>
</template>

<script type="text/javascript">
    
    import linkFoot from './sfoot.vue'
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
  @import './edit.styl'
</style>
