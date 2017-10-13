import Vue from 'vue'
import Vuex from 'vuex'
import QRCode from './modules/QRCode.js'
import applyLoan from './modules/applyLoan.js'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    QRCode,
    applyLoan
  },
  strict: debug
})
