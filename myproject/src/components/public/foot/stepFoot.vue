<template>
    <section class="G-step-foot clearfix">
        <a :href="'tel:'+telephone" class="G-link-txt box__fl">联系客服</a>
        <router-link to="/help" class="G-link-txt box__fr">使用帮助</router-link>
    </section><!-- 底部链接区域 -->
</template>

<script type="text/javascript">
    export default {
        name: "login",
        data () {
            return {
              author: "Geek.Yu",
              telephone: 18870836264
            }
        }
    }
</script>