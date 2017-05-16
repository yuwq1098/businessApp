import Vue from 'vue'
//vue 路由模块 vue-router 
import Router from "vue-router";

// 定义组件
const welcome = r => require.ensure([], () => r(require('./components/welcome/welcome.vue')), 'welcome')
const login = r => require.ensure([], () => r(require('./components/login/login.vue')), 'login')
const help = r => require.ensure([], () => r(require('./components/help/usinghelp.vue')), 'help')
const example__color = r => require.ensure([], () => r(require('./components/example/color.vue')), 'color')

// 启用路由
Vue.use(Router)

// 定义路由
export default new Router({
    routes: [
        {
        	path: '',
            redirect: '/welcome'
	    },
	    {
	        path: '/welcome',
	        component: welcome
	    },
	    {
	        path: '/login',
	        component: login
	    },
	    {
	        path: '/help',
	        component: help
	    },
	    {
	        path: '/color',
	        component: example__color
	    }
	]
})
