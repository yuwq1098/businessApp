<template>
    <section class="m-tabnav-box f__clearfix">
        <a href="javascript:;" class="u-lk on">我的线索</a>
        <a href="javascript:;" class="u-lk">抢购线索</a>
    </section><!-- 选项卡 -->
</template>

<script type="text/javascript">
    export default {
        name: "clue_nav",
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
  @import './clue_nav.styl'
</style>
