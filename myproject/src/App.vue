<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './common/css/reset'
    @import './common/css/app'
</style>