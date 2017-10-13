import Axios from 'axios'
// import MD5 from 'js-md5'

function Service() {
  let axios = Axios.create({
    timeout: 40000,
    baseURL: 'https://221.12.107.165/sdk/open/',  // sit环境
    // baseURL: 'http://10.4.146.4/sdk/open/', // 开发环境
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  // 拉去客户信息
  this.magerLogin = (params) => {
    return axios.post('proxyMagerLoginQRC', params)
  }
  this.merInput = (params) => {
    return axios.post('proxyMerInputQRC', params)
  }
  this.sendMessage = (params) => {
    return axios.post('sendMessage', params)
  }
  this.pictureCode = (params) => {
    return axios.post('pictureCode', params)
  }
  this.valiPictureCode = (params) => {
    return axios.post('valiPictureCode', params)
  }
  this.custLoanApp = (params) => {
    return axios.post('cusLoanApp', params)
  }
}
export default new Service()
