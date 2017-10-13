// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'normalize.css'
import './public/sass/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false
let store = require('./vuex/store.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store.default,
  router,
  template: '<App/>',
  components: { App }
})
