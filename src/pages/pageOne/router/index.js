import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/child',
      name: 'child',
      component: () => import(/* webpackChunkName: "about" */ '../components/childPage.vue')
    }
  ]
})
