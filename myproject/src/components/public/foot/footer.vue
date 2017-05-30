<template>
    <footer class="G-foot-nav">
        <ul class="m-nav-list f__clearfix">
            <li class="u-nav-item box__fl" :class="[navItem==1?'on':'']">
                <router-link :to="{ path : '/clue' }" class="u-lk">
                    <i class="u-ico iconfont icon-107"></i>
                    <p class="u-tit">线索</p>
                </router-link>
            </li>
            <li class="u-nav-item box__fl" :class="[navItem==2?'on':'']">
                <router-link :to="{ path : '/contacts' }" class="u-lk">
                    <i class="u-ico iconfont icon-lianxiren"></i>
                    <p class="u-tit">联系人</p>
                </router-link>
            </li>
            <li class="u-nav-item box__fl" :class="[navItem==3?'on':'']">
                <router-link :to="{ path : '/member' }" class="u-lk">
                    <i class="u-ico iconfont icon-wode1"></i>
                    <p class="u-tit">我的</p>
                </router-link>
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
            
        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './footer.styl'
</style>