import Vue from 'vue'
import Router from 'vue-router'

const welcome = r => require.ensure([], () => r(require('../page/welcome')), 'welcome')
const login = r => require.ensure([], () => r(require('../page/login')), 'login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'welcome'
      } //重定位
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome, 
      alias: '/wel'  //别名
    },
    {
      path: '/login',
      name: 'login',
      component: login, 
    }
  ]
})
