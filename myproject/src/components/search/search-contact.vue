<template>
    <div id="search-contact" class="G-page">

        <section class="G-search-box">
            <a href="javascript:;">
                <div>
                    <i class="iconfont"></i>
                    <p>搜索姓名或手机号</p>
                </div>
            </a>
        </section><!-- 搜索 -->

        <div class="G-list-box">
            <section class="res-clue-list">
                <div class="m-item">
                    <a href="javascript:;">
                        <div class="m-line">
                            <span class="u_name">陈永兴</span>
                            <p>15125789692</p>
                            <i class="iconfont"></i>
                        </div>
                    </a>
                </div>
                <div class="m-item">
                    <a href="javascript:;">
                        <div class="m-line">
                            <span class="u_name">陈永兴</span>
                            <p>15125789692</p>
                            <i class="iconfont"></i>
                        </div>
                    </a>
                </div>
                <div class="m-item">
                    <a href="javascript:;">
                        <div class="m-line">
                            <span class="u_name">陈永兴</span>
                            <p>15125789692</p>
                            <i class="iconfont"></i>
                        </div>
                    </a>
                </div>
            </section><!-- 电话簿列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 联系人列表容器 -->
        
    </div>
</template>

<script type="text/javascript">

    export default {
        name: "search-contact",
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
  @import './search-contact.styl'
</style>
