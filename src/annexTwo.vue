<template>
  <div class="annexTwo">
    <nav class="nav">
      <van-icon size="20" @click="back" name="arrow-left" />
      <h6>附件二</h6>
    </nav>
    <footer class="footer">
      <p>友盟移动分析 SDK</p>
      SDK 类型：产品监测 <br />
      SDK 描述：监测 APP
      业务功能，界面点击情况，通过数据分析可进行风险控制并优化 APP
      业务功能，提示产品使用体验<br />
      SDK 使用业务场景：嘉联合伙人 APP 轮播图、商户入网等各类业务场景<br />
      SDK 所需用户信息字段：操作日志信息、设备型号、 IMEI 号、 APP
      版本号、手机型号、读取 AndroidID 、读取 WIFI 的 BSSID 、读取 WIFI 的SSID
      <br />使用目的／理由：风险监控和 APP 业务功能优化官网地址：<a
        href="https://www.umeng.com/"
        >https://www.umeng.com/</a
      ><br />隐私政策链接： <a href="https://www.umeng.com/policy.html">https://www.umeng.com/policy.html</a>
      <p>Bugly SDK</p>
      SDK 类型：性能监测<br />SDK
      描述：监控定位从崩溃、报错、代码效率质量低下、交互过慢、第三方 API
      调用监控、到网络环境出错等多维度复杂的性能问题<br />
      SDK 使用业务场景：对 APP 进行性能监控，提升产品使用体验 <br />
      SDK 所需用户信息字段：设备型号、 IMEI 号、系统版本、手机型号、 APP
      版本号、读取当前运行应用进程、读取 AndroidID <br />使用目的／理由： APP
      性能监测，捕获应用崩溃时的异常信息，记录崩溃发生前用户操作轨迹和上下文信息，综合判断崩溃原因等<br />官网地址：<a href="https://buglyqq.com/v2/index">https://buglyqq.com/v2/index</a>
      <br />隐私政策链接：<a href="https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf">https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf</a>
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
.annexTwo {
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
    a{
      color:rgb(117, 154, 245);
    }
  }
}
</style>