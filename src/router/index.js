import Vue from 'vue'
import Router from 'vue-router'

// 导入路由组件
import Home from '@/pages/Home/index.vue'
import SignIn from '@/pages/SignIn/index.vue'
import Classification from '@/pages/Classification/index.vue'
import List from '@/pages/List/index.vue'
import Cart from '@/pages/Cart/index.vue'
import Mine from '@/pages/Mine/index.vue'
import Collection from '@/pages/Collection/index.vue'
import Contacts from '@/pages/Contacts/index.vue'
import Order from '@/pages/Order/index.vue'
import Location from '@/pages/Location/index.vue'
import Details from '@/pages/Details/index.vue'
// import { session } from '../util/storage.util'
Vue.use(Router)

// 路由匹配规则
let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/Home' }, // 首页
    { path: '/Home', name: 'Home', component: Home }, // 首页
    { path: '/SignIn', name: 'SignIn', component: SignIn }, // 登录
    { path: '/Classification', name: 'Classification', component: Classification }, // 分类页
    { path: '/List', name: 'List', component: List }, // 列表页
    { path: '/Cart', name: 'Cart', component: Cart }, // 购物车
    { path: '/Mine', name: 'Mine', component: Mine }, // 个人中心
    { path: '/Collection', name: 'Collection', component: Collection }, // 我的收藏
    { path: '/Contacts', name: 'Contacts', component: Contacts }, // 联系人
    { path: '/Order', name: 'Order', component: Order }, // 订单
    { path: '/Location', name: 'Location', component: Location }, // 地址
    { path: '/Details', name: 'Details', component: Details } // 地址
  ]
})
// 全局路由守卫
// 在进入某个路由前执行的代码
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) { // 判断页面是否需要登录验证
//     // 判断是否登录
//     if (session('token')) {
//       next()
//     } else {
//       next({
//         name: '/SignIn'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
