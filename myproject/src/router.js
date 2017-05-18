import Vue from 'vue'
//vue 路由模块 vue-router 
import Router from "vue-router";

// 定义组件
const example__color = r => require.ensure([], () => r(require('./components/example/color.vue')), 'color')
const example__red = r => require.ensure([], () => r(require('./components/example/red.vue')), 'red')
const example__blue = r => require.ensure([], () => r(require('./components/example/blue.vue')), 'blue')
const example__black = r => require.ensure([], () => r(require('./components/example/black.vue')), 'black')
const example__white = r => require.ensure([], () => r(require('./components/example/white.vue')), 'white')
const example__gray = r => require.ensure([], () => r(require('./components/example/gray.vue')), 'gray')
const example__orange = r => require.ensure([], () => r(require('./components/example/orange.vue')), 'orange')
const example__green = r => require.ensure([], () => r(require('./components/example/green.vue')), 'green')


const welcome = r => require.ensure([], () => r(require('./components/welcome/welcome.vue')), 'welcome')
const login = r => require.ensure([], () => r(require('./components/login/login.vue')), 'login')
const register = r => require.ensure([], () => r(require('./components/register/register.vue')), 'register')
const step1 = r => require.ensure([], () => r(require('./components/register/step1.vue')), 'step1')
const step2 = r => require.ensure([], () => r(require('./components/register/step2.vue')), 'step2')
const step3 = r => require.ensure([], () => r(require('./components/register/step3.vue')), 'step3')
const help = r => require.ensure([], () => r(require('./components/help/usinghelp.vue')), 'help')


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
	        path: '/register',
	        redirect: '/step1'
	    },
	    {
	        path: '/step1',
	        component: step1
	    },
	    {
	        path: '/step2',
	        component: step2
	    },
	    {
	        path: '/step3',
	        component: step3
	    },
	    {
	        path: '/help',
	        component: help
	    },




	    {
	        path: '/color',
	        component: example__color
	    },
	    {
	        path: '/red',
	        component: example__red
	    },
	    {
	        path: '/blue',
	        component: example__blue
	    },
	    {
	        path: '/black',
	        component: example__black
	    },
	    {
	        path: '/white',
	        component: example__white
	    },
	    {
	        path: '/gray',
	        component: example__gray
	    },
	    {
	        path: '/orange',
	        component: example__orange
	    },
	    {
	        path: '/green',
	        component: example__green
	    }    
	]
})
