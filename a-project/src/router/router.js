import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/page/welcome'
import login from '@/page/login'

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
