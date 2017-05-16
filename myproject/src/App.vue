<template>
  <div id="app">
    <img src="./image/logo.png">
    <h1>{{msg}}</h1>
    <ul>
      <li><router-link to="/first">跳转至第一页</router-link></li>
      <li><router-link to="/second">跳转至第二页</router-link></li>
      <li><router-link to="/fc">跳转至第三页</router-link></li>

    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        msg: "开始我的vue之路"
      }
    }
  }
</script>

<style>
  body{
    background-color: #e2e2e2;
    color: #e45;
  }
</style>
