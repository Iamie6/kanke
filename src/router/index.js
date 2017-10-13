import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/QRCode/index'
import applyLoan from '@/components/applyLoan/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/huoke'
    },
    {
      path: '/huoke',
      name: 'index',
      component: index
    },
    {
      path: '/applyLoan',
      name: 'applyLoan',
      component: applyLoan
    }
  ]
})
