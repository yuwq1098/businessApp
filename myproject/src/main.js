import Vue from 'vue'
import VueRouter from 'vue-router'
//网络请求模块 vue-resource
import VueResource from 'vue-resource'
//路由
import routes from './router'
//Fastclick(解决移动端300s延迟事件)
import Fastclick from './common/vendor/fastclick'
import flexible from './common/vendor/flexible'

import './common/css/index.styl'


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: __dirname, //这个很重要
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

new Vue({
	router,
	Fastclick,
	flexible,
}).$mount("#app")