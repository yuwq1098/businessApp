import Vue from 'vue'
//vue 路由模块 vue-router 
import Router from "vue-router";

// 定义组件
const welcome = r => require.ensure([], () => r(require('./components/welcome/welcome.vue')), 'welcome')
const login = r => require.ensure([], () => r(require('./components/login/login.vue')), 'login')


Vue.use(Router)

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
	    }
	]
})
