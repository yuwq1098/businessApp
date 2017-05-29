<template>
    <div id="clue" class="G-page">
        <section class="m-tb-group f__mt20">
            <div class="m-gp-box">
                <span class="u-tit">姓名</span>
                <section class="u-con">陈永兴</section>
            </div>
            <div class="m-gp-box">
                <span class="u-tit">联系方式</span>
                <section class="u-con">15125789692
                    <i class="iconfont icon-dianhua"></i>
                </section>
            </div>
        </section>
        <h4 class="m-shd">询价线索</h4>

        <div class="m-list-box">
            <section class="clue-list">
                <div class="u-item">
                    <a href="javascript:;" class="u-lk">
                        <p class="u_tit">栏板式半挂</p>
                        <p class="u_time">2017-05-22 20:39</p>
                    </a>
                </div>    
                <div class="u-item">
                    <a href="javascript:;" class="u-lk">
                        <p class="u_tit">栏板式半挂</p>
                        <p class="u_time">2017-05-22 20:39</p>
                    </a>
                </div>    
                <div class="u-item">
                    <a href="javascript:;" class="u-lk">
                        <p class="u_tit">栏板式半挂</p>
                        <p class="u_time">2017-05-22 20:39</p>
                    </a>
                </div>  
                <div class="u-item">
                    <a href="javascript:;" class="u-lk">
                        <p class="u_tit">栏板式半挂</p>
                        <p class="u_time">2017-05-22 20:39</p>
                    </a>
                </div>  
                <div class="u-item">
                    <a href="javascript:;" class="u-lk">
                        <p class="u_tit">栏板式半挂</p>
                        <p class="u_time">2017-05-22 20:39</p>
                    </a>
                </div>  
            </section>
        </div>
        
        <!-- 引入底部按钮操作区 -->
        <link-foot :item-size="2">
            <a slot="s-btn-a" href="javascript:;" class="u-btn">返回</a>
            <a slot="s-btn-b" href="javascript:;" class="u-btn">编辑</a>
        </link-foot>

    </div>
</template>

<script type="text/javascript">
    
    import linkFoot from './sfoot.vue'
    export default {
        name: "clue",
        data () {
            return {

                
            }
        },
        // 引入组件
        components:{
            linkFoot,
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){

        },
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './details.styl'
</style>
