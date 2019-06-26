import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import left from './pages/left/left.vue'
Vue.component('left',left)

import right from './pages/right/right.vue'
Vue.component('right',right)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
import api from '@/common/vmeitime-http/'
// 全局挂载后使用 http://ext.dcloud.net.cn/plugin?id=159#detail
Vue.prototype.$api = api

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()





