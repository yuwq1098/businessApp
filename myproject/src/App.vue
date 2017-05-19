<template>
    <div id="app">
        <transition name="G-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
    
</template>
<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './common/css/reset'
    @import './common/css/app'
    
    //-路由过渡
    .G-fade-enter,.G-fade-leave
        transform translate3d(0, 0, 0)

    .G-fade-enter-active,.G-fade-leave-active 
        transition all .3s cubic-bezier(0.25, 0.46, 0.33, 0.91)

    .G-fade-enter-active
        transform translate3d(0%, 0, 0)
        opacity 1
    .G-fade-leave-active 
	    transform translate3d(-100%, 0, 0)
	    opacity 0

</style>