<template>
  <div class="success">
    <div class="text-content">
      <span class="title">浙江泰隆商业银行</span>
      <span class="head">尊敬的客户：</span>
      <span class="first">您好！</span>
      <p class="content">您的贷款申请已提交成功，已为您分配专职客户经理-{{this.rspData.managerName}}，稍后会及时与您联系，请您准备好以下材料。注意接听尾号为{{this.rspData.managerMobile}}的来电。感谢您选择和信任泰隆银行。</p>
    </div>
    <div class="tips">
      <span>资料清单：</span>
      <span>1. 身份证原件；</span>
      <span>2. 近半年工资流水或经营相关证明；</span>
    </div>
    <mt-button plain type="primary" @click.native="handleClick">知道了！</mt-button>
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
      open(location, '_self').close();
    }
  },
  computed: {
    rspData() {
      return this.$store.state.applyLoan.rspData
    }
  }

}
</script>
<style lang="scss" scoped>
@import './../../public/sass/common.scss';
.success {
  margin-top: pxToRem(44px);
  display: flex;
  flex-direction: column;
  .text-content {
    display: flex;
    flex-direction: column;
    margin-bottom: pxToRem(34px);
    .title {
      font-size: pxToRem(18px);
      line-height: pxToRem(32px);
    }
    .head {
      margin-left: pxToRem(16px);
      font-size: pxToRem(16px);
      line-height: pxToRem(25px);
      align-self: flex-start;
    }
    .content {
      margin: 0 pxToRem(16px) 0 pxToRem(46px);
      text-align: left;
    }
    .first {
      font-size: pxToRem(16px);
      align-self: flex-start;
      margin:  pxToRem(14px)  0  pxToRem(12px)  pxToRem(48px);
    }
    p {
      font-size: pxToRem(16px);
      line-height: pxToRem(25px);
    }
  }
  .tips {
    font-size: pxToRem(16px);
    line-height: pxToRem(32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: pxToRem(15px);
    margin-bottom: pxToRem(55px);
  }
  .mint-button {
    width: pxToRem(279px);
    height: pxToRem(44px);
    margin: 0 auto;
    font-size: pxToRem(18px);
  }
}
</style>
<style lang="scss">
.success{
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
