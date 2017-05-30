<template>
    <div id="clue" class="G-page m-fixed-top m-fixed-bottom" :tapItem="2">

        <section class="m-filter-box clearfix">
            <div class="u-item">
                <span>地区</span>
                <i class="iconfont icon-xiasanjiao"></i>
            </div>
            <div class="u-item">
                <span>类别</span>
                <i class="iconfont icon-xiasanjiao"></i>
            </div>
        </section><!-- 条件筛选 -->

        <div class="m-list-box">
            <section class="recd-list">
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">河北 石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="f__fr">五分钟前</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">四川 达州</span>
                                <span class="u_name">刘洪</span>
                            </div>
                            <div class="f__fr">7小时</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">四川 达州</span>
                                <span class="u_name">刘洪</span>
                            </div>
                            <div class="f__fr">7小时</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">四川 达州</span>
                                <span class="u_name">刘洪</span>
                            </div>
                            <div class="f__fr">7小时</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">四川 达州</span>
                                <span class="u_name">刘洪</span>
                            </div>
                            <div class="f__fr">7小时</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsBuy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u-flag">推荐</span>仓栅式半挂
                        </h3>
                        <section class="u-line f__clearfix">
                            <div class="f__fl">
                                <span class="u_area">四川 达州</span>
                                <span class="u_name">刘洪</span>
                            </div>
                            <div class="f__fr">7小时</div>
                        </section>
                        <section class="u-line v2 f__clearfix">
                            <div class="f__fl">
                                <span class="u-lab">独享</span>
                            </div>
                            <a href="javascript:;" class="f__fr u-btn u-not-see">点击查看</a>
                        </section>
                    </router-link>
                </div>
            </section><!-- 推荐线索列表 -->
        </div>

        <router-link :to="{path:'/sold'}" class="m-float-ball">已售</router-link><!-- 查看已售线索 -->
        
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
  @import './buy_clue.styl'
  body 
    background #e45
</style>
