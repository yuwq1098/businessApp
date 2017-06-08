<template>
    <div id="welcome" class="G-page">
        <section class="G-page-box">
            <div class="G-logo">
                <img :src="data.logoUrl" :alt="data.logoTit" />
            </div><!-- logo区域 -->
            <div class="G-logo-txt">
                欢迎使用商机宝     
            </div><!-- 应用标语 -->
            <router-link to="/register" class="G-btn G-btn-primary G-btn-full">注册</router-link><!-- 注册 -->
            <router-link to="/login" class="G-btn G-btn-hollow G-btn-full">已有账号</router-link><!-- 登录 -->
        </section><!-- 登录框区域 -->

        <step-foot></step-foot><!-- 底部帮助链接 -->
        
    </div>
</template>

<script type="text/javascript">
    import stepFoot from 'components/public/foot/stepFoot.vue';
    import {getClueLists} from 'api/getData.js';

    export default {
        name: "welcome",
        data () {
            return {
                author: {
                    tel: 18870836264,
                },
                data: {
                    logoUrl: "static/img/LOGO.png",
                    logoTit: "商机宝LOGO",
                },
                value: false,
            }
        },
        // 引入组件
        components:{
            stepFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){
            getClueLists().then((res) => {
                    console.log("大厅车辆列表",res.data);
                })
            // this.$ajax({
            //       method: 'get',
            //       url: '/api/clue/clueLists',
            // })
            // this.$ajax({
            //     method: 'get',
            //     url: '/api/clue/clueLists',
            //     data: {
            //         name: 'wise',
            //         info: 'wrong'
            //     }
            // })
            // const cdata = {};
            // getClueLists(cdata).then((res) => {
            //     console.log(res)
            // });
        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './welcome.styl'
</style>
