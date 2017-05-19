// vue加载入口文件
import Vue from 'vue'
import App from './App'
//网络请求模块 vue-resource
import VueResource from 'vue-resource'
//路由
import router from './router'
//Fastclick(解决移动端300s延迟事件)
import Fastclick from './common/vendor/fastclick'
import flexible from './common/vendor/flexible'
import VeeValidate from 'vee-validate';
//修改语言包
import zh_CN from 'vee-validate/dist/locale/zh_CN';
//自定义规则
import Validator from './common/js/customValidate';

//VeeValidate语言包切换,放自定义提示前
Validator.addLocale(zh_CN);

//自定义提示
const dictionary = {
    zh_CN: {
        messages: {
            required: (field) => field + '不能为空'
        }
    }
};
Validator.updateDictionary(dictionary);

//载入
Vue.use(VeeValidate, {
  locale: 'zh_CN',
});

//开启debug模式
Vue.config.debug = true;
//取消日志及警告
Vue.config.silent = true;

//载入vue-resource
Vue.use(VueResource);

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

var vue = new Vue({
	router,
	Fastclick,
	flexible,
	template: '<App/>',
	components: { App }
}).$mount("#app")