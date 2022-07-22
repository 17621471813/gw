<template>
  <div class="annexOne">
    <nav class="nav">
      <van-icon size="20" @click="back" name="arrow-left" />
      <h6>附件一</h6>
    </nav>
     <footer class="footer">
        <p>业务场景或功能对用户个人信息的采集需求说明</p>
 
    <p>开通账号</p>
       收集频率：仅业务触发时收集<br />
    个人信息类型：个人基本资料<br />
    个人信息字段：手机号、姓名、城市<br />
    采用信息目的说明、场景描述：收集联系方式方便业务人员进行线下注册服务
       <p>账户密码登录</p>
    收集频率：仅业务触发时收集<br />个人信息类型：个人基本资料、个人常用设备信息<br />个人信息字段：登录账号<br />采用信息目的说明、场景描述：在盈收收展业版登录首页，验证账号及密码完成登录
 
    <p>商户开通</p> 收集频率：仅业务触发时收集<br>个人信息类型：个人基本资料、个人身份信息个人信息字段：姓名、身份证号、身份证正反面照片银行卡号、手机号、营业执照、门头照和经营场所照片<br>采用信息目的说明、场景描述：商户开通时需要进行商户信息录入、个人身份校验以及风险控制
    <p>我的／修改／忘记登录密码</p>
   收集频率：仅业务触发时收集 <br>个人信息类型：个人基本资料、个人身份信息个人信息字段：手机号、动态验证码<br>采用信息目的说明、场景描述：验证用户相关信息后，我的／修改个人登录密码
    <p>账户详情</p>
   收集频率：仅业务触发时收集 <br>个人信息类型：个人基本资料<br>个人信息字段：个人头像、昵称、收货地址、手机号码、姓名、身份证号<br>采用信息目的说明、场景描述：用于维护用户基本信息
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
  .footer{
      width: calc(100% - 20px);
    padding: 10px 10px;
      background: #fff;
         height: 80vh;
    overflow-y: auto;
  }
}
</style>