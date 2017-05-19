<template>
    <div id="login" class="G-page">
        <section class="G-step-box">
            <div class="G-input-box">
                <div class="G-row-tit">手机号</div>
                <div class="G-row-con">
                    <input type="tel" v-model="user_phone" placeholder="请输入手机号" class="G-input-rimless G-input-all"/>
                </div>
            </div>

            <div class="G-input-box">
                <div class="G-row-tit">验证码</div>
                <div class="G-row-con code">
                    <input  type="tel" placeholder="请输入验证码" class="G-input-rimless"/> 
                    <button class="G-btn G-btn-disabled right">获取验证码</button>
                </div>
            </div>

            <button disabled="disabled" id="bind_user" class="G-btn G-btn-disabled G-btn-full">立即绑定</button>

            <router-link to="/register" class="G-link-txt register box__fr">注册新帐号</router-link>
            
        </section><!-- 登录框区域 -->

        <div class="column is-12">
            <label class="label" for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
            <label class="label" for="mobile">mobile</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="mobile">
                <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
            </p>
        </div>

        <step-foot></step-foot><!-- 底部帮助链接 -->
    </div>
</template>


<script type="text/javascript">
    import stepFoot from '../public/foot/stepFoot.vue';
    export default {
        name: "login",
        data () {
            return {
                comment:"",
                username: "",
                password: "",
                newpassword:"",
                matchPassword:false,
                $validatorMethod: {}
            }
        },
        mounted(){
            setTimeout(() => {
                console.log("aaaa");
            }, 2000);
        },
        validators: {
            noempty:function(val){
                var reg = /^\s*$/g, isFlag = true;
                if(val == "" || reg.test(val)){
                    isFlag = false;
                }
                return  isFlag;
            },
            username: function (val) {
                return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
            },
            integer: function (val) {
                return /^[1-9]\d*$/.test(val);
            },
            match:function (val,result) {
                return result;
            }
        },
        // 引入组件
        components:{
            stepFoot,
        },
        methods:{
            passwInvalid(){
                alert('只能输入6-20个字母、数字、下划线');
            },
            passwok(){
                //alert('验证码符合规范')
            },
            loginMethods:function () {
                var self = this;
                /**
                 * 验证目标表单元素。
                 * true:验证所有
                 */
                self.$validate(true,function () {
                    /*如果所有条件都是false*/
                    if(!self.$validatorMethod.invalid){
                        alert("登录成功");
                    }
                })
            }
        },
        computed:{
            matchPassword:function () {
                return this.password == this.newpassword
            }
        },
        watch: {
            'passw': function(){
                console.log("aaaa");
            }
        }
    }

</script>

<!-- “scoped” 让css只作用当前组件 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './login.styl'
</style>
