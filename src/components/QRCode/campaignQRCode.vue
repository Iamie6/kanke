<template>
  <div class="campaign">
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item label="活动名称">
        <el-input v-model="form.name" placeholder="活动名称"></el-input>
      </el-form-item>
      <el-form-item label="活动描述">
        <el-input v-model="form.address" placeholder="活动描述"></el-input>
      </el-form-item>
      <el-form-item label="目标群体">
        <el-input v-model="form.address" placeholder="目标群体"></el-input>
      </el-form-item>
      <el-form-item label="活动期间(起始日)" class="date">
        <el-date-picker
          v-model="form.create_start_date"
          type="date"
          format="yyyy-MM-dd"
          placeholder="活动期间(起始日)">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="活动期间(终止日)" class="date">
        <el-date-picker
          v-model="form.create_end_date"
          type="date"
          format="yyyy-MM-dd"
          placeholder="活动期间(终止日)">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="活动预期">
        <el-input v-model="form.boss" placeholder="活动预期"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.mobile" placeholder="联系电话"></el-input>
      </el-form-item>
    </el-form>
    <mt-button plain type="primary" @click.native="handleClick" :disabled="disabled">生成活动二维码(未开放)</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        disabled:true,
        form: {
          name: '',
          address: '',
          catag: '',
          boss: '',
          mobile: '',
          create_start_date: '',
          create_end_date: ''
        }
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
      }
    },
    methods: {
      handleClick() {
        let myreg = /^1(3|4|5|7|8)+\d{9}$/;
        if (!myreg.test(this.form.mobile) || this.form.mobile.length!==11) {
          return Toast({
            message: '请输入正确的手机号码',
            duration: 1500
          });
        }
        if (this.form.name.trim().length < 1||this.form.address.trim().length < 1||this.form.catag.length < 1||
          this.form.boss.trim().length < 1) {
          return Toast({
            message: '输入内容为空或有误',
            duration: 1500
          });
        }
        if (this.form.create_end_date.replace('-','') >= this.form.create_start_date.replace('-','')) {
          return Toast({
            message: '活动终止日期必须在起始日期之后',
            duration: 1500
          });
        }
        let params = {
          appID: 'fa6c519f_aad2_4f7f_bb2b_552d273544c9',
          reqData: {
            appID: 'fa6c519f_aad2_4f7f_bb2b_552d273544c9',
            sno: this.paramsObj.sno,
            mobile: this.form.mobile,
            boss: this.form.boss,
            name: this.form.name,
            catag: this.form.catag,
            address: this.form.address,
            cust_manager: this.initialInfo.rspData.cust_manager,
          }
        }
        this.$store.dispatch('mer_Input', params)
          .then(res => {
            if (res.ok) {
              this.$emit('toNexT', {type: 'Campaign'})
            } else {
              return Toast({
                message: res.msg,
                duration: 1500
              });
            }
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './../../public/sass/common.scss';
  .campaign {
    /*text-align: center;*/
    margin-top: pxToRem(23px);
    >form {
      padding:0 pxToRem(20px);
    }
    .code {
      display: flex;
      .el-input {
        width: 50%;
      }
      .mint-button {
        left:-5%;
        width: 29%;
        font-size: 14px;
        height: 35px;
      }
    }
    .mint-button {
      width: pxToRem(279px);
      height: pxToRem(44px);
      margin-top: pxToRem(20px);
      margin-bottom: pxToRem(29px);
      font-size: pxToRem(18px);
    }
  }
</style>

<style lang="scss">
  @import './../../public/sass/common.scss';
.campaign{
    .el-input__inner:focus{
    border-color: #ff651b;
  }
  .el-date-table td.current:not(.disabled), .el-date-table td.end-date, .el-date-table td.start-date{
        background-color: #ff651b!important;
  }
  .el-date-table td.today{
    color: #ff651b;
  }
  .el-date-table td.today:before{
    border-top: .5em solid #ff651b;
  }
  .el-date-editor.el-input {
    width:pxToRem(230px);
  }
  .el-input{
     width:pxToRem(230px);
  }
  .date{
    margin-bottom: pxToRem(9px);
  }
}

</style>
