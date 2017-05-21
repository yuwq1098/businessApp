<template>
  <div id="help" class="G-page">
    <section>这是帮助页面</section>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "help",
  data () {
    return {
      author: "Geek.Yu"
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './usinghelp.styl';
</style>
