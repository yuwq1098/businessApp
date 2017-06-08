import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
//引入vuex状态配置
import store from './store/'
import Mint from 'mint-ui';
import VueLazyload from 'vue-lazyload'
//路由
import routes from './router'
//Fastclick(解决移动端300s延迟事件)
import Fastclick from './common/vendor/fastclick'

//引入jq
import $ from './common/vendor/jquery.min.js'
import flexible from './common/vendor/flexible'

import 'mint-ui/lib/style.css';
import './common/css/index.styl'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 将axios 改写为 Vue 的原型属性,使得其在其他组件中一样能使用
Vue.prototype.$ajax = axios

Vue.use(VueRouter);
Vue.use(Mint);


const router = new VueRouter({
    routes,
    mode: 'hash',
})

// after 钩子没有 next 方法，不能改变导航
router.afterEach((to) => {
    document.body.scrollTop = 0+"px"
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
	router,
	Fastclick,
	flexible,
}).$mount("#app")