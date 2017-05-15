<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- 引入"scoped"属性后,改CSS只会作用到组件 -->
<style lang="stylus" src="./style/reset.styl"></style>
