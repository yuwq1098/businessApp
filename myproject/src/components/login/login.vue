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
                    <button class="G-btn G-btn-disabled right">获取验证码</button>
                </div>
            </div>

            <button disabled="disabled" id="bind_user" class="G-btn G-btn-disabled G-btn-full">立即绑定</button>

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
                    value: false
                },
                telephone: "",
                code: "",
            }
        },
        // 引入组件
        components:{
            stepFoot,
            gToast,
        },
        // 定义函数方法
        methods:{
            validate: function (obj,rule) {
                
                var regular = {
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
                    }
                }
                
                for (var val of regular) {
                    if(val==rule) return regular[val];
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
                console.log(val)
                var res =  this.validate(val,"mobile");
                console.log(res);
            },
            code(val){
                console.log(val)
            }
        }
    }

</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './login.styl'
</style>
