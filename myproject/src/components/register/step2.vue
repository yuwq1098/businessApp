<template>
    <div id="step2">
        <div class="m-info-ipt">
            <div class="m-ipt-line">
                <span class="u-tit vital">真实姓名</span>
                <input type="text" class="u-ipt" placeholder="与身份证一致" />
            </div>
            <div class="m-ipt-line">
                <span class="u-tit vital">身份证号</span>
                <input type="text" class="u-ipt" placeholder="与身份证一致" />
            </div>
            <div class="m-upload-box">
                <span class="u-tit">上传身份证号</span>
                <div class="m-upload">
                    <div class="u-pic-box">
                        <img src="../../common/img/u-add.png" alt="添加的小图标" class="u-add" />
                        <p class="u-txt">上传图片</p>
                    </div>
                </div>
            </div>
            <div v-if="!isOK" class="bind-user m-btn-gray">提交信息，等待审核</div>
            <router-link :to="{path:'/register/step3'}" v-if="isOK" class="bind-user m-btn-fill">提交信息，等待审核</router-link>
            <router-link :to="{path:'/login'}" id="gotoLogin" class="u-lk f__fr">绑定已有账号</router-link>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {
        name: "step2",
        data () {
            return {
                isOK : true,
            }
        },
        
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './step2.styl'
</style>
