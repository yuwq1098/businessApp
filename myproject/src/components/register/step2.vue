<template>
    <div id="step2">
        <p>身份认证</p>
        <router-link :to="{path:'/register/step3'}">前往成功页</router-link>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: "step2",
        data () {
            return {

            }
        },
        
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './step2.styl'
</style>
