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
                <div class="m-upload" @click="onUplodaImg" v-if="!imgs[0]">
                    <div class="u-pic-box">
                        <img src="../../common/img/u-add.png" alt="添加的小图标" class="u-add" />
                        <p class="u-txt">上传图片</p>
                    </div>
                </div>
                <div class="m-img-box f__clearfix" v-if="imgs[0]">
                    <div class="u-pic f__fl">
                        <img :src="imgs[0]"/>
                    </div>
                    <a class="u-lk f__fl" @click="onUplodaImg">重新上传</a>
                </div>
                <input v-show="false" @change='add_img' ref="fileInput" id="st18" name="evidence" type="file"/>
            </div>
            <div v-if="!isOK" class="bind-user m-btn-gray">提交信息，等待审核</div>
            <router-link :to="{path:'/register/step3'}" v-if="isOK" class="bind-user m-btn-fill">提交信息，等待审核</router-link>
            <router-link :to="{path:'/login'}" id="gotoLogin" class="u-lk f__fr">绑定已有账号</router-link>
        </div>
        
        <!-- 提示组件 -->
        <g-toast
                :type="toast.type"
                :time="toast.time"
                :value="toast.value"
            >
        </g-toast>

    </div>
</template>

<script type="text/javascript">
    
    import gToast from '../module/gtoast/toast.vue';

    export default {
        name: "step2",
        data () {
            return {
                toast: {
                    type: "warn",
                    time: 2500,
                    value: ""
                },
                isOK : true,
                imgs: [],
            }
        },
        components:{
            gToast,
        },
        methods: {
            // 触发上传
            onUplodaImg(){
                var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false; 
                if(ie){ 
                    this.$refs.fileInput.click(); 
                }else{
                    let ev = document.createEvent("MouseEvents");
                    ev.initEvent("click", true, true);  
                    this.$refs.fileInput.dispatchEvent(ev);     
                } 
            },
            add_img(event){
                var _this = this;
                _this.imgs = [];
                var reader = new FileReader();
                var img1=event.target.files[0];
                if(img1.size>3*1024*1024){
                    this.toast.value= "上传的图片不要超过3MB"
                    this.toast.type= "error";
                    return _this.imgs = [];
                }
                reader.readAsDataURL(img1);
                reader.onloadend=function(){
                    _this.toast.value= "成功"
                    _this.toast.type= "success";
                    _this.imgs.push(reader.result)    
                }
            }
        },
        
    }
</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './step2.styl'
</style>
