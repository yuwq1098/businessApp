<template>
  <div id="example" class="G-page">
    <section class="G-color-box">
      <ul class="G-color-bar-box G-color__black">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__gray">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__white">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__blue">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__green">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__cyan">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__orange">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__yellow">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__red">
        <li v-for="n in 5" :class="['G-color-bar', 'G-color-bar-'+n]"></li>
      </ul>
      <ul class="G-color-bar-box G-color__pink">
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
  $black = #39424A
  $blue = #1499f7
  $gray = #c2c5c8
  $green = #8AD121
  $cyan = #29B475
  $orange = #ff9100
  $yellow = #FFCB10
  $red = #ec2a00
  $pink = #F02387
  $white = #fff
  .G-color-box
    width 100%
    min-height 20rem
    box-sizing border-box
    padding .25rem .25rem .25rem
    .G-color-bar-box
      height 1rem
      box-sizing border-box
      padding-right 1rem
      font-size 0px
      letter-spacing -4px
      &:not(:last-child)
        margin-bottom .25rem
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
            background $black + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__blue
        .G-color-bar
          background $blue
        for i in 2..5
          .G-color-bar-{i}
            background $blue + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__gray
        .G-color-bar
          background $gray
        for i in 2..5
          .G-color-bar-{i}
            background $gray + -((i - 1) * 8)% + -((i - 1) * .5)deg
      &.G-color__green
        .G-color-bar
          background $green
        for i in 2..5
          .G-color-bar-{i}
            background $green + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__orange
        .G-color-bar
          background $orange
        for i in 2..5
          .G-color-bar-{i}
            background $orange + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__yellow
        .G-color-bar
          background $yellow
        for i in 2..5
          .G-color-bar-{i}
            background $yellow + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__red
        .G-color-bar
          background $red
        for i in 2..5
          .G-color-bar-{i}
            background $red + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__pink
        .G-color-bar
          background $pink
        for i in 2..5
          .G-color-bar-{i}
            background $pink + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__cyan
        .G-color-bar
          background $cyan
        for i in 2..5
          .G-color-bar-{i}
            background $cyan + (i - 1) * 8% + (i - 1) * .5deg
      &.G-color__white
        .G-color-bar
          background $white
        for i in 2..5
          .G-color-bar-{i}
            background $white + -((i - 1) * 2.5)%
    

</style>
