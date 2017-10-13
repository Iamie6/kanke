
<template>
  <div class="home">
    <div class="photo">
      <span>{{this.msg}}</span>
      <img :src="'data:image/jpg;base64,'+this.initialInfo.imageBase64">
      <!--<mt-button plain type="primary" @click.native="handleClick">保存至相册</mt-button>-->
    </div>
    <div class="more">
      <mt-button plain type="primary" @click.native="merClick">生成商户二维码</mt-button>
      <mt-button plain type="primary" @click.native="campaignClick" :disabled="true">活动二维码(建设中)</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data() {
      return {
        center: true,
        loading: true
      }
    },
    methods: {
      merClick() {
        this.$emit('toNexT',{
          type: 'goMer'
        })
      },
      campaignClick() {
        this.$emit('toNexT',{
          type: 'goCampaign'
        })
      }
    },
    computed: {
      initialInfo() {
        return this.$store.state.QRCode.initialInfo
      },
      routeInfo() {
        return this.$store.state.QRCode.routeInfo
      },
      paramsObj() {
        return this.$store.state.QRCode.paramsObj
      },
      msg() {
        return this.$store.state.QRCode.msg.msg
      }
    },
    created() {
      let routeDate = this.$route.query
      if(Object.keys(routeDate).length > 0 && this.msg==='客户经理二维码') {
        this.$store.commit('save_route_info', routeDate)
        this.$store.dispatch('mager_Login', {
          appID: this.routeInfo.appID,
          reqData: {
            appID: this.routeInfo.appID,
            sno: this.paramsObj.sno,
            barSize: 'S',
            code: this.routeInfo.code
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
 @import './../../public/sass/common.scss';
 .home{
   .photo{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     >span{
       font-size: pxToRem(18px);
       line-height: pxToRem(32px);
       margin-bottom: pxToRem(21px);
     }
     img{
       width: pxToRem(175px);
       height: pxToRem(175px);
     }
   }
 }
</style>
<style lang="scss">
 @import './../../public/sass/common.scss';
 .home{
   .mint-button--primary.is-plain{
    border: 1px solid #ff651b;
    background-color: transparent;
    color: #ff651b;
  }
  .mint-button{
    font-size: pxToRem(18px);
  }
 }


</style>

