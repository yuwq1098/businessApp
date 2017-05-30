<template>
    <div id="clue" class="G-page" :tapItem="2">

        <section class="G-search-box clearfix">
            <div class="box__fl">
                <span>地区</span>
                <i class="iconfont"></i>
            </div>
            <div class="box__fr">
                <span>类别</span>
                <i class="iconfont"></i>
            </div>
        </section><!-- 条件筛选 -->

        <div class="G-list-box">
            <section class="recd-list">
                <div class="recd-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="box__fr">7小时</div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <a href="javascript:;" class="box__fr">点击查看</a>
                        </p>
                    </a>
                </div>
                <div class="recd-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="box__fr">7小时</div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <a href="javascript:;" class="box__fr">点击查看</a>
                        </p>
                    </a>
                </div>
                <div class="recd-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="box__fr">7小时</div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <a href="javascript:;" class="box__fr">点击查看</a>
                        </p>
                    </a>
                </div>
                <div class="recd-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="box__fr">7小时</div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <a href="javascript:;" class="box__fr">点击查看</a>
                        </p>
                    </a>
                </div>
                <div class="recd-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span>推荐</span>仓栅式半挂
                        </h3>
                        <p>
                            <div class="box__fl">
                                <span class="u_district">河北·石家庄</span>
                                <span class="u_name">李亮</span>
                            </div>
                            <div class="box__fr">7小时</div>
                        </p>
                        <p>
                            <div class="box__fl">
                                <span>独享</span>
                            </div>
                            <a href="javascript:;" class="box__fr">点击查看</a>
                        </p>
                    </a>
                </div>
            </section><!-- 推荐线索列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 线索列表容器 -->

        <a class="G-float-ball" href="javascript:;">已售</a><!-- 查看已售线索 -->
        
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
