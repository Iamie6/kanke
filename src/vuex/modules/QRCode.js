
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  initialInfo: {
      errorCode: '',
      errorMsg: '',
      custManager: '',
      imageBase64: '',
      returnCode: '',
      returnMsg: ''
  },
  routeInfo: {
    code: '', // 客户经理id
    appID: ''
  },
  paramsObj: {
    sno: `HK${new Date().getTime()}`   // 流水号
  },
  msg: {
    msg: '客户经理二维码'
  }
}
const actions = {
  mager_Login({ commit }, payload) {
    Service.magerLogin(payload)
      .then(res => {
        if (res.data.returnCode === '000000') {
          commit('save_mager_image', res.data.rspData)
        }
      })
      .catch(e => {
        console.log(e)
      })

  },
  mer_Input({ commit }, payload) {
    return Service.merInput(payload)
      .then(res => {
        if (res.data.returnCode === '000000') {
          commit('save_mager_image', res.data.rspData)
          commit('save_mager_msg', { msg: '商户二维码' })
          return { ok: true }
        } else {
          return {
            ok: false,
            msg: res.data.errorMsg
          }
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

}
const mutations = {
  save_mager_image(state, payload) {
    state.initialInfo = payload
  },
  save_mager_msg(state, payload) {
    state.msg = payload
  },
  save_route_info(state, payload) {
    state.routeInfo = payload
  },
  update_initial_info(state, payload) {
    state.initialInfo = payload
  }
}

export default {
  state,
  mutations,
  actions
}
