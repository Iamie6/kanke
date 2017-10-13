<template>
  <div class="first">
    <div class="banner">
      <img src="./../../assets/png/banner.png" alt="泰隆普惠海报">
    </div>
    <mt-button plain type="primary" @click.native="handleClick">申请贷款</mt-button>
    <div class="info">
      <div class="text">
        <span>全国客服热线</span>
        <span class="mobile">400-88-96575</span>
        <span>网上银行</span>
        <span class="net-address">www.zjtlcb.com</span>
      </div>
      <div class="qrcode">
        <div class="first">
          <span>直销银行</span>
          <img src="./../../assets/png/qrcode-1.png" alt="直销银行二维码">
        </div>
        <div>
          <span>手机银行</span>
          <img src="./../../assets/png/qrcode-2.png" alt="手机银行二维码">
        </div>
      </div>
      <div class="logo">
        <!-- <img src="./../../assets/png/logo.png" alt="泰隆银行logo"> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mobile: '',
      readonly: true,
      value: [],
    }
  },
  methods: {
    handleClick() {
      this.$emit('toNexT', { type: 'info' })
    }
  },
  created() {
    let routeDate = this.$route.query
    if (Object.keys(routeDate).length > 0) {
      this.$store.commit('save_Head_Info', routeDate)
    }
  }

}
</script>
<style lang="scss" scoped>
@import './../../public/sass/common.scss';
.first {
  .banner {
    width: pxToRem(375px);
    height: pxToRem(322px);
    img {
      width: pxToRem(375px);
      height: pxToRem(366px);
    }
  }
  .mint-button {
    width: pxToRem(279px);
    height: pxToRem(44px);
    margin: 0 auto pxToRem(16px);
    font-size: pxToRem(18px);
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #f2f2f2;
    padding-top: pxToRem(20px);
    .text {
      color: rgb(47, 47, 47);
      font-size: pxToRem(12px);
      display: flex;
      flex-direction: column;
      width: 50%;
      .mobile {
        font-size: pxToRem(16px);
        font-weight: 600;
        margin: pxToRem(4px) 0 pxToRem(11px);
        font-style: oblique;
      }
      .net-address {
        font-size: pxToRem(16px);
        font-weight: 600;
        margin-bottom: pxToRem(4px);
        font-style: oblique;
        margin-bottom: pxToRem(4px);
      }
    }
    .qrcode {
      display: flex;
      color: rgb(47, 47, 47);
      font-size: pxToRem(14px);
      width: 50%;
      >div {
        display: flex;
        flex-direction: column;
        span {}
        img {
          width: pxToRem(62px);
          height: pxToRem(62px);
        }
      }
      .first {
        margin-right: pxToRem(14px);
      }
    }
    .logo {
      width: pxToRem(183.5px);
      height: pxToRem(25.5px);
      background: url("./../../assets/png/logo.png") no-repeat;
      background-size: contain;
      margin: pxToRem(9px) auto pxToRem(32px);
    }
  }
}
</style>
<style lang="scss">
.first{
  .mint-button--primary.is-plain {
    border: 1px solid #ff651b;
    background-color: transparent;
    color: #ff651b;
  }
  .mint-button--primary {
    background-color: #ff651b;
  }
}

</style>
