<template>
  <div class="annexOne">
    <nav class="nav">
      <van-icon size="20" @click="back" name="arrow-left" />
      <h6>附件四</h6>
    </nav>
    <footer class="footer">
      <p>共享个人信息涉及的信息类型、字段、频率、目的</p>

      <p>银行卡认证</p>
      共享用户信息的类型：个人身份信息
      <br />共享用户信息的字段：姓名、身份证号、银行卡号、银行预留手机号<br />共享频次：每次进行入网认证结算卡信息时共享一次<br />共享信息的第三方合作机构／子公司名称：接口模式接入的合规机构，如杭州银联等<br />共享信息的目的／用途：个人身份校验以及风险控制判断
      <p>实名认证</p>
      共享用户信息的类型：个人基本资料、个人身份信息
      <br />共享用户信息的字段：姓名、身份证号、身份证有效起始／截止日期、身份证地址、身份证签发机关、身份证照片、常驻地区地址、职业、银行卡号、银行卡开户行、银行卡预留手机号、银行卡照片、手机号
      <br />共享频次：每次进行个人账户信息完善<br />共享信息的第三方合作机构／子公司名称：中国移动（三要素鉴权）、银联（四要素鉴权）<br />共享信息的目的／用途：个人身份校验以及风险控制判断
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="less" scoped>
.annexOne {
  position: relative;
  background: #f8fbff;
  height: calc(100% - 30px);
  padding: 14px 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 20px;
  p {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 800;
    color: #2f2f2f;
    margin: 10px 0;
  }
  .nav {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    h6 {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #20272f;
      margin-left: 120px;
    }
  }
  .footer {
    width: calc(100% - 20px);
    padding: 10px 10px;
    background: #fff;
    height: 80vh;
    overflow-y: auto;
  }
}
</style>