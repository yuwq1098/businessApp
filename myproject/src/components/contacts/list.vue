<template>
    <div id="contacts" class="G-page">

        <section class="G-search-box">
            <a href="javascript:;" class="u-lk">
                <div class="m-srh">
                    <i class="iconfont icon-sousuo"></i>
                    <span class="u-count">共1条</span>搜索姓名或手机号
                </div>
            </a>
        </section><!-- 搜索 -->

        <div class="G-list-box">
            <section class="tel-list">
                <div class="m-item">
                    <router-link :to="{path:'/contactsDetails'}" class="u-lk">
                        <div class="u-name">陈永兴</div>
                        <div class="u-tel">15125798692</div>
                        <i class="iconfont icon-dianhua"></i>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/contactsDetails'}" class="u-lk">
                        <div class="u-name">陈永兴</div>
                        <div class="u-tel">15125798692</div>
                        <i class="iconfont icon-dianhua"></i>
                    </router-link>
                </div>
                <div class="m-item">
                    <router-link :to="{path:'/contactsDetails'}" class="u-lk">
                        <div class="u-name">陈永兴</div>
                        <div class="u-tel">15125798692</div>
                        <i class="iconfont icon-dianhua"></i>
                    </router-link>
                </div>
            </section><!-- 电话簿列表 -->
            <section class="no-item">
                <p>~我是有底线的~</p>
            </section>
        </div><!-- 联系人列表容器 -->

        <section class="g-add-ball" @click.stop="addContact">
            <i class="iconfont icon-tianjia"></i>
        </section><!-- 添加线索 -->
        
        <!-- 引入底部 -->
        <c-foot :nav-item="2"></c-foot>
        
    </div>
</template>

<script type="text/javascript">
    import cFoot from '../public/foot/footer.vue'
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
            cFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){
            
        },
        // 自定义函数/方法
        methods:{
            addContact(){
                this.$router.push({ path: '/contactsEdit' })
            },
        }
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './contact.styl'
</style>
