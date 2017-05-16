<template>
  <div id="example" class="G-page">
    <section class="G-color-box">
      <div v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></div>
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/css/app'
  @import './example.styl'
  $color = #b2b5b8
  .G-color-box
    width 100%
    box-sizing border-box
    padding .25rem .25rem 0
    .G-color-bar
      height 1rem
      width @width
      margin-bottom .25rem
      background #000
    for n in 1..5
      if n > 1
        .G-color-bar-{n}
          background $color + -(n*5)% + -(n*1.5)deg
      else
        .G-color-bar-{n}
          background $color
    

</style>
