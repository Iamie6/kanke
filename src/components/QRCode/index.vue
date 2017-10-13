<template>
  <div class="qrcode">
    <header>二维码</header>
    <component :is="componentId" @toNexT="handleToNext">
    </component>
  </div>
</template>

<script>
  import myQRCode from './myQRCode.vue'
  import merQRCode from './merQRCode.vue'
  import campaignQRCode from './campaignQRCode.vue'
  export default {
    data() {
      return {
        componentId: myQRCode
      }
    },
    methods: {
      handleToNext(paylod) {
        if(paylod.type === 'goMer'){
          this.componentId = merQRCode
        }else if(paylod.type === 'goCampaign'){
          this.componentId = campaignQRCode
        }else if(paylod.type === 'Campaign'){
          this.componentId = myQRCode
        }else if(paylod.type === 'Mer'){
          this.componentId = myQRCode
        }

      }
    },
    components: {
      myQRCode,
      merQRCode,
      campaignQRCode
    }
  }
</script>

<style lang="scss" scoped>
  @import './../../public/sass/common.scss';
  .qrcode {
    header{
      font-size: pxToRem(18px);
      color: #fff;
      line-height: pxToRem(40px);
      background-color: rgb(255,101,27);
      margin-bottom: pxToRem(21px);
    }
  }
</style>
