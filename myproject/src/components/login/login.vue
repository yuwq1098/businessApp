<template>
    <div id="login" class="G-page">
        <section class="G-step-box">
            <div class="G-input-box">
                <div class="G-row-tit">手机号</div>
                <div class="G-row-con">
                    <input type="tel" v-model="telephone" placeholder="请输入手机号" class="G-input-rimless G-input-all"/>
                </div>
            </div>

            <div class="G-input-box">
                <div class="G-row-tit">验证码</div>
                <div class="G-row-con code">
                    <input  type="tel" v-model="code" placeholder="请输入验证码" class="G-input-rimless"/> 
                    <button class="G-btn right" :class="[codeShow?'G-btn-yellow':'G-btn-disabled']">获取验证码</button>
                </div>
            </div>

            <button :disabled="isSubmit?false:'disabled'"  @click="bindUser" id="bind_user" class="G-btn G-btn-full" :class="[isSubmit?'':'G-btn-disabled']">立即绑定</button>

            <router-link to="/register" class="G-link-txt register box__fr">注册新帐号</router-link>
            
        </section><!-- 登录框区域 -->

        <!-- 提示组件 -->
        <g-toast
                :type="toast.type"
                :time="toast.time"
                :value="toast.value"
            >
        </g-toast>

        <step-foot></step-foot><!-- 底部帮助链接 -->
    </div>
</template>

<script type="text/javascript">
    import stepFoot from '../public/foot/stepFoot.vue';
    import gToast from '../module/gtoast/toast.vue';

    export default {
        name: "login",
        data () {
            return {
                toast: {
                    type: "warn",
                    time: 2500,
                    value: ""
                },
                telephone: "",
                code: "",
                codeShow: false,
                isSubmit: false
            }
        },
        // 引入组件
        components:{
            stepFoot,
            gToast,
        },
        // 定义函数方法
        methods:{
            bindUser: function(){
                console.log("绑定账号");
            },
            validate: function (obj,rule,...arg) {

                //验证规则
                var regular = {
                    "isNUM": function(){
                        return /^[0-9]+$/.test(obj);
                    },
                    "mobile": function(){
                        return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(obj);
                    },
                    "email": function(){
                        return /^1[3|5|8]\d{9}$/.test(obj);
                    },
                    "card": function(){
                        return /^\d{15}|\d{18}$/.test(obj);    
                    },
                    "datetime": function(){
                        return /^\d{4}-\d{1,2}-\d{1,2}$/.test(obj);   
                    }, 
                    "code": function(){
                        return /^[A-Za-z0-9]{4,6}$/.test(obj);    
                    },
                    "code__len__4": function(){
                        return /^[A-Za-z0-9]{4}$/.test(obj);
                    },
                    "code__len__6": function(){
                        return /^[A-Za-z0-9]{6}$/.test(obj);    
                    },
                    "maxlength": function(num){
                        var reg_str = '/^[A-Za-z0-9]{0,'+num+'}$/';
                        var reg = new RegExp(eval(reg_str));
                        return reg.test(obj);  
                    }
                }

                if(/^maxlength.*$/.test(rule)){
                    if(/^maxlength__.*$/.test(rule)==false){
                        console.log("语法不对(maxlength__{num})");
                        return false;  
                    }
                    var num = rule.replace(/maxlength__/,"");
                    return regular["maxlength"](num);

                }else{
                    //找到指定的验证
                    for (var verify in regular) {
                        if(verify==rule) return regular[verify]();
                    }
                }
                
            }
        },
        // 声明周期，vue实例挂载好的时候
        mounted(){
            setTimeout(() => {
                
            },2000);
        },
        // 属性值计算
        computed:{
            
        },
        // 侦听数据
        watch: {
            telephone(val){
                if(this.validate(val,"maxlength__11")==false){
                    this.toast.value= "一般手机号码为11位数！"
                    this.toast.type= "error";
                    clearTimeout(this.timeout)
                    this.timeout = setTimeout(() => {
                        this.toast.value = "";
                    }, this.toast.time)
                    return false;
                }
                if(this.validate(val,"isNUM")==false){
                    this.toast.value= "您输入的不是数字！"
                    this.toast.type= "warn";
                    clearTimeout(this.timeout)
                    this.timeout = setTimeout(() => {
                        this.toast.value = "";
                    }, this.toast.time)
                    return false;
                }
                //如果输入的是手机号
                if(this.validate(val,"mobile")){
                    clearTimeout(this.timeout)
                    this.toast.value= "正确的手机号！"
                    this.toast.type= "success";
                    return this.codeShow = true;
                }
                return this.codeShow = false;
            },
            code(val){
                //如果验证码格式正确
                if(this.validate(val,"code")) return this.isSubmit = true;
                return this.isSubmit = false;
            }
        }
    }

</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './login.styl'
</style>
