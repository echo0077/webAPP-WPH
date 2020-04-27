import Vue from 'vue'
import Router from 'vue-router'

// 导入路由组件
import Home from '@/pages/Home/index.vue'
import { session } from '../util/storage.util'
Vue.use(Router)

// 路由匹配规则
let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/Home' }, // 首页
    { path: '/Home', name: 'Home', component: Home } // 首页
  ]
})
// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) { // 判断页面是否需要登录验证
    // 判断是否登录
    if (session('token')) {
      next()
    } else {
      next({
        name: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
