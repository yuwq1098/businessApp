<template>
  <div id="login">
    <h1>this is login page!</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "login",
  data () {
    return {
      author: "Geek.Yu"
    }
  }
}
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus">
  @import './login.styl';
</style>
