<template>
    <div id="my_clue" class="G-page m-fixed-top m-fixed-bottom" :tapItem="1">

        <section class="G-search-box">
            <a href="javascript:;" class="u-lk">
                <div class="m-srh">
                    <i class="iconfont icon-sousuo"></i>搜索姓名或手机号
                </div>
            </a>
        </section><!-- 搜索 -->

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
                            <a href="javascript:;" class="f__fr u-btn">点击查看</a>
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
            <section class="contact-list">
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsMy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u_name">陈永兴</span>
                            <span class="u_area">云南 楚雄</span>
                        </h3>
                        <section class="u-line">
                            <div class="c_model">栏板式半挂</div>
                        </section>
                        <section class="u-line">
                            <div class="issue_time">2017/05/22</div>
                        </section>
                        <i class="iconfont icon-arrowright1"></i>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/clueDetailsMy'}" class="u-lk">
                        <h3 class="m-tit">
                            <span class="u_name">陈永兴</span>
                            <span class="u_area">云南 楚雄</span>
                        </h3>
                        <section class="u-line">
                            <div class="c_model">栏板式半挂</div>
                        </section>
                        <section class="u-line">
                            <div class="issue_time">2017/05/22</div>
                        </section>
                        <i class="iconfont icon-arrowright1"></i>
                    </router-link>
                </div>
            </section><!-- 联系人列表 -->
            <section class="no-item">
                <p>~我是有底线滴~</p>
            </section>
        </div><!-- 线索列表容器 -->

        <!-- 引入底部 -->
        <c-foot :nav-item="1"></c-foot>
        
    </div>
</template>

<script type="text/javascript">
    import cFoot from '../public/foot/footer.vue'
    export default {
        name: "my_clue",
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
            cFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './my_clue.styl'
</style>
