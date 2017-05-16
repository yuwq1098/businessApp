<template>
  <div id="firstcomponent">
    <h1>this is firstcomponent page!</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "Geek.Yu"
    }
  }
}
</script>
