<template>
    <div id="clue" class="G-page">
        <section class="G-tabnav-box">
            <a href="javascript:;">我的线索</a>
            <a href="javascript:;">抢购线索</a>
        </section><!-- 选项卡 -->

        <section class="G-search-box">
            <a href="javascript:;">
                <div>
                    <i class="iconfont"></i>
                    <p>搜索姓名或手机号</p>
                </div>
            </a>
        </section><!-- 搜索 -->

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
            </section><!-- 推荐线索列表 -->
            <section class="contact-list">
                <div class="contact-item">
                    <a href="javascript:;">
                        <h3 class="">
                            <span class="u_name"></span>
                            <span class="u_district_">云南 楚雄</span>
                        </h3>
                        <p>
                            <div class="c_model">栏板式半挂</div>
                        </p>
                        <p>
                            <div class="issue_time">2017/05/22</div>
                        </p>
                        <i class="iconfont"></i>
                    </a>
                </div>
            </section><!-- 联系人列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 线索列表容器 -->

        <footer class="G-foot-nav">
            <ul class="clearfix">
                <li class="box__fl active">
                    <i class="iconfont"></i>
                    <span>线索</span>
                </li>
                <li class="box__fl">
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
