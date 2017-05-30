<template>
    <div id="clue" class="G-page">
        <section class="G-tabnav-box f__clearfix">
            <a href="javascript:;"  @click.stop="tapSwitch(1)" ref="itema" class="u-lk" :class="tapItem==1?'on':''">我的线索</a>
            <a href="javascript:;" @click.stop="tapSwitch(2)" ref="itemb" class="u-lk" :class="tapItem==2?'on':''">抢购线索</a>
        </section><!-- 选项卡 -->

        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <!-- 引入底部 -->
        <c-foot :nav-item="1"></c-foot>
        
    </div>
</template>

<script type="text/javascript">
    import cFoot from '../public/foot/footer.vue'
    export default {
        name: "clue",
        data () {
            return {
                tapItem : 1,
            }
        },
        props: {

        },
        // 引入组件
        components:{
            cFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){
            let path = this.$route.path;
            console.log(path)
            switch(path){
                case '/clue/myClue': this.tapItem = 1;
                    break;
                case '/clue/buyClue': this.tapItem = 2;
                    break;
            }
        },
        // 自定义函数/方法
        methods: {
            tapSwitch(num){
                this.tapItem = num;
                if(num==1){
                    this.$router.push({ path: '/clue/myClue' })   
                }else if(num==2){
                    this.$router.push({ path: '/clue/buyClue' })
                }
            },
        },
        
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './clue.styl'
</style>
