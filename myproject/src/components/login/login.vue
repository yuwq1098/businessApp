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


        <validator name="validatorMethod">

            <div class="username">
                <label for="">用户名：</label>
                <input type="text" v-model="username" initial="off" v-validate:username="['username']" placeholder="请输入用户名">
                <p class="red" v-if="$validatorMethod.username.username">由数字、26个英文字母或下划线和中文组成的字符串</p>
            </div>
            <div class="password">
                <label for="">密码：</label>
                <input type="password" v-model="password" initial="off" v-validate:password="['integer']"  placeholder="请输入密码">
                <p class="red" v-if="$validatorMethod.password.integer">只能是数字</p>
            </div>
            <div><a @click="loginMethods" class="btn">登录</a></div>
        </validator>


        <step-foot></step-foot><!-- 底部帮助链接 -->
    </div>
</template>


<script type="text/javascript">
    import stepFoot from '../public/foot/stepFoot.vue';
    export default {
        name: "login",
        data () {
            return {
                username: '',
                password: '',
            }
        },
        mounted(){
            setTimeout(() => {

            }, 2000);
        },
        validators: {
            username: function (val) {
                return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
            },
            integer: function (val) {
                return /^[1-9]\d*$/.test(val);
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
