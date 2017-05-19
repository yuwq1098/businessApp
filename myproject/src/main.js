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
import vuevalidator from './common/vendor/vue-validator'


//开启debug模式
Vue.config.debug = true;
//取消日志及警告
Vue.config.silent = true

//载入vue-resource
Vue.use(VueResource);

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

var vue = new Vue({
	router,
	Fastclick,
	flexible,
	vuevalidator,
	template: '<App/>',
	components: { App }
}).$mount()
document.getElementById('app').appendChild(vue.$el)