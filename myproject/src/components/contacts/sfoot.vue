<template>
    <div class="G-link-footer btn-wrap clearfix" :class="'item'+itemSize">
        <slot name="s-btn-a">
            <a href="javascript:;" class="u-btn">取消</a>
        </slot>
        <slot name="s-btn-b">
            <a href="javascript:;" class="u-btn">保存</a>
        </slot>
        <slot name="s-btn-c" :if="itemSize>2"></slot>

    </div>
</template>

<script type="text/javascript">

    export default {
        name: "clue",
        data () {
            return {

            }
        },
        props: {
            itemSize: {
                type: Number,
                default: 2
           },     
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/css/mixin.styl"
    .G-link-footer
        height 48px
        width 100%
        position fixed
        bottom 0
        left 0
        .u-btn
            font-size 15px
            height 48px
            line-height 48px
            float left
            _spacingPlus(3px)
            background #b5b6b7
            text-align center
            color #f4f4f4
    .item2
        .u-btn
            width 50%
            &:nth-child(2)
                background $c_green
    .item3
        .u-btn
            width 26%
            &:nth-child(2)
                background #1a0
            &:nth-child(3)
                width 48%
                background $c_green
            
</style>
