<template>
  <div class="helpCenter">
    <footer class="footer">
      <section class="section">1.商户进件需要什么资料</section>
      a.法人结算：法人身份证正反面照片、银行卡正反面（对私结算提供）或开户许
      可证照片（对公结算提供）、银行卡开户行、手机号、邮箱、营业执照、门头照、
      场景照、收银台照、法人手持身份证照、法人手持银行卡照、协议
      <br />b.非法人结算：法人身份证正反面照片、非法人银行卡正反面、手机号、邮箱、
      营业执照、门头照、场景照、收银台照、非法人身份证正反面照片、非法人手持
      身份证照、非法人手持银行卡照、协议、非法人结算授权
      <section class="section">2.可以秒到吗？</section>
      D0 为 24 小时秒到
      <section class="section">3.盈收单笔额度是多少？单日额度是多少？</section>
      单笔最大金额 1 万，单日笔数 50 笔；单日最大金额 20 万，单月笔数 50000笔
      <section class="section">4.代理商可以在 APP 进件嘛？</section>
      可以，APP 和PC(网页)都可以进件
      <section class="section">5.商户进件有年龄限制嘛？</section>
      年龄在18-60 岁
      <section class="section">6.基本费率是多少</section>
      信用卡费率 0.6%（及时到账加万 2）<br />
      储蓄卡费率 0.5%-20 元封顶（及时到账加万 2）<br />
      微信、支付宝 0.38%（及时到账加万 2），不开通及时到账，默认为 T1 到账
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.helpCenter {
  position: relative;
  width: calc(100% -30px);
  height: calc(100% -30px);
  background: #f8fbff;
  padding: 0 15px 30px 15px;
  line-height: 20px;
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
    margin-top: 10px;
    background: #fff;
    border-radius: 6px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #414141;
    height: 80vh;
    overflow-y: auto;
    &-top {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: #262626;
      width: 100%;
      text-align: center;
    }
    .section {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 800;
      color: #2f2f2f;
      margin-top: 14px;
    }
    .article {
      margin-top: 5px;
    }
  }
}
</style>