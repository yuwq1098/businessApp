<template>
    <transition name="G-fade" mode="out-in">
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
    </transition>
</template>
<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    //-路由过渡
    .G-fade-enter
        transform translate3d(100%, 0, 0)
        opacity 1
    
    .G-fade-enter-active
        transition all .18s cubic-bezier(0.27, 0.68, 0.51, 0.92)
    .G-fade-leave-active 
        transition all 0s cubic-bezier(0.27, 0.68, 0.51, 0.92)
    
    .G-fade-leave,.G-fade-enter-to
        transform translate3d(0, 0, 0)

    .G-fade-enter-to
        opacity 1

    .G-fade-leave-to
        transform translate3d(-100%, 0, 0)
        opacity 1

</style>