<template>
  <div id="second">
    <h1>I am another page</h1>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
import '../plugins/app.js'

export default {
  name: "second",
  data() {
    return {
      author: "Geek.yu",
      articles: [],
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>

<style lang="stylus">
  body
    background #85d
  *
    color #f86
</style>
