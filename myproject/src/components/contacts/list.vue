<template>
    <div id="contacts" class="G-page">

        <section class="G-search-box">
            <a href="javascript:;">
                <div>
                    <i class="iconfont"></i>
                    <p>搜索姓名或手机号</p>
                </div>
            </a>
        </section><!-- 搜索 -->

        <div class="G-list-box">
            <section class="tel-list">
                <div class="tel-item">
                    <a href="javascript:;">
                        <p>
                            <div class="u_name">陈永兴</div>
                        </p>
                        <p>
                            <div class="u_telephone">15125798692</div>
                        </p>
                        <i class="iconfont"></i>
                    </a>
                </div>
            </section><!-- 电话簿列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 联系人列表容器 -->

        <section class="g-add-ball">
            <i class="iconfont"></i>
        </section><!-- 添加线索 -->

        <footer class="G-foot-nav">
            <ul class="clearfix">
                <li class="box__fl">
                    <i class="iconfont"></i>
                    <span>线索</span>
                </li>
                <li class="box__fl active">
                    <i class="iconfont"></i>
                    <span>联系人</span>
                </li>
                <li class="box__fl">
                    <i class="iconfont"></i>
                    <span>我的</span>
                </li>
            </ul>

        </footer>

        
    </div>
</template>

<script type="text/javascript">

    export default {
        name: "clue",
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

        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './clue.styl'
</style>
