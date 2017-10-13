
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  rspData: {
      errorCode: '',
      errorMsg: '',
      custId: '',
      managerMobile: '',
      managerName: ''
  },
  headInfo: {
      appID: 'b8578176_10b7_4915_988e_bb5fc2e18cd3',
      custManager: '008857',
      commercrialId: ''
  },
  paramsObj: {
      sno: `HK${new Date().getTime()}`   // 流水号
  },
  picture: {
    imageBase64: ''
  }
}
const actions = {
  cust_Loan_App({commit}, payload) {
      return Service.custLoanApp(payload)
        .then(res => {
          if (res.data.returnCode === '000000') {
            commit('save_rspData_Info', res.data.rspData)
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
    },
    picture_code({commit}, payload) {
      return Service.pictureCode(payload)
        .then(res => {
          if (res.data.returnCode === '000000') {
            commit('save_picture', res.data.rspData)
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
    },
    vali_picture_code({commit}, payload) {
      return Service.valiPictureCode(payload)
        .then(res => {
          if (res.data.returnCode === '000000') {
            return {
              ok: true,
              msg: res.data.rspData.content
            }
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
  save_Head_Info(state, payload) {
    state.headInfo = payload
  },
  save_rspData_Info(state, payload) {
    state.rspData = payload
  },
  save_picture(state, payload) {
    state.picture = payload
  }
}

export default {
    state,
    mutations,
    actions
}
