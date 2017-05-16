<template>
  <div id="example" class="G-page">
    <section class="G-color-box">
      <div v-for="n in ['a','b','c','d','e']" :class="['G-color-bar', 'G-color-bar-'+n]"></div>
      <div v-for="n in 10" :class="['G-color-bar', 'G-color-bar-'+n]"></div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "example",
  data () {
    return {
      author: "Geek.Yu"
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/app'
  @import './example.styl'
  .G-color-box
    width 100%
    box-sizing border-box
    padding .25rem .25rem 0
    .G-color-bar
      height 1rem
      width @width
      margin-bottom .25rem
      background #000
    for n, i in e d c b a
      .G-color-bar-{n}
        background #f43 - i*8%
    for n in 1..10
      .G-color-bar-{n}
        background #f43 + n*8%
    

</style>
