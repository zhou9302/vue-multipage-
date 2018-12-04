// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../../styles/index.scss'
import { Pagination, Table, TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from 'dayjs'
// import '../../styles/iconfont/iconfont.css'
Vue.config.productionTip = false
window.dayjs = dayjs
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
