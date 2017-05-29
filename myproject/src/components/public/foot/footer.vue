<template>
    <footer class="G-foot-nav">
        <ul class="m-nav-list f__clearfix">
            <li class="u-nav-item box__fl" :class="[navItem==1?'on':'']">
                <a href="javascript:;" class="u-lk">
                    <i class="u-ico iconfont icon-107"></i>
                    <p class="u-tit">线索</p>
                </a>
            </li>
            <li class="u-nav-item box__fl" :class="[navItem==2?'on':'']">
                <a href="javascript:;" class="u-lk">
                    <i class="u-ico iconfont icon-lianxiren"></i>
                    <p class="u-tit">联系人</p>
                </a>
            </li>
            <li class="u-nav-item box__fl" :class="[navItem==3?'on':'']">
                <a href="javascript:;" class="u-lk">
                    <i class="u-ico iconfont icon-wode1"></i>
                    <p class="u-tit">我的</p>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script type="text/javascript">

    export default {
        name: "footer",
        data () {
            return {

            }
        },
        props: {
            navItem: {
                type: Number,
                default: 1
           },     
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){
           console.log(this.navItem)
        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './footer.styl'
</style>