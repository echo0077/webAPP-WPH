// 入口文件
import 'babel-polyfill'
import App from './App'
import Vue from 'vue'
import router from './router'
import store from './util/store'
import installFun from './util/tools'
// 引入 网络请求模块
import { post, get } from './util/http.js'

import Promise from 'es6-promise'

// 导入全局样式初始化文件
import '@/assets/css/Initial.css'

// 引入vant-UI 库
import Vant, {Lazyload} from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Lazyload)

Promise.polyfill()
window.Promise = Promise

Vue.use(installFun)

Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
