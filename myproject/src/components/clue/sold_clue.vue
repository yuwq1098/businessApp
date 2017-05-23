<template>
    <div id="soldClue" class="G-page">
        <div class="">
            <h3>已售线索TOP 100</h3>
        </div>
        
        <div class="G-list-box">
            <section class="sold-list">
                <div class="sold-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <div class="box__fr">
                                <span class="u-time">2小时前</span>
                                <span class="u-txt">被王**抢走</span>
                            </div>
                        </p>
                    </a>
                </div>
                <div class="sold-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <div class="box__fr">
                                <span class="u-time">2小时前</span>
                                <span class="u-txt">被王**抢走</span>
                            </div>
                        </p>
                    </a>
                </div>
                <div class="sold-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <div class="box__fr">
                                <span class="u-time">2小时前</span>
                                <span class="u-txt">被王**抢走</span>
                            </div>
                        </p>
                    </a>
                </div>
            </section><!-- 推荐线索列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 线索列表容器 -->

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
