<template>
  <div id="example" class="G-page">
    <section class="G-color-box">
      <ul class="G-color-bar-box G-color__black">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__blue">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__gray">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__green">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__orange">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__red">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__white">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
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
  $black = #313536
  $blue = #4bd
  $gray = #b2b5b8
  $green = #3f5
  $orange = #ffa548
  $red = #fb4444
  $white = #fff
  .G-color-box
    width 100%
    box-sizing border-box
    padding .25rem .25rem 0
    .G-color-bar-box
      height 1rem
      box-sizing border-box
      margin-bottom .25rem
      padding-right 1rem
      font-size 0px
      letter-spacing -4px
      .G-color-bar
        width 20%
        height 1rem
        display inline-block
        position relative
        left 0
      for i in 2..5
        .G-color-bar-{i}
          left (i - 1) * .25rem
      &.G-color__black
        .G-color-bar
          background $black
        for i in 2..5
          .G-color-bar-{i}
            background $black + i*5% + i*1deg
      &.G-color__blue
        .G-color-bar
          background $blue
        for i in 2..5
          .G-color-bar-{i}
            background $blue + i*10% + i*1deg
      &.G-color__gray
        .G-color-bar
          background $gray
        for i in 2..5
          .G-color-bar-{i}
            background $gray + -(i*5)% + -(i*1.5)deg
      &.G-color__green
        .G-color-bar
          background $green
        for i in 2..5
          .G-color-bar-{i}
            background $green + i*6% + i*.5deg
      &.G-color__orange
        .G-color-bar
          background $orange
        for i in 2..5
          .G-color-bar-{i}
            background $orange + i*5% + -(i*.5)deg
      &.G-color__red
        .G-color-bar
          background $red
        for i in 2..5
          .G-color-bar-{i}
            background $red + i*5% + i*1deg
      &.G-color__white
        .G-color-bar
          background $white
        for i in 2..5
          .G-color-bar-{i}
            background $white + -(i*2)%
    

</style>
