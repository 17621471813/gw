<template>
  <div class="annexThree">
    <nav class="nav">
      <van-icon size="20" @click="back" name="arrow-left" />
      <h6>附件三</h6>
    </nav>
    <footer class="footer">
      <p>获取用户手机权限的场景和频率（ Android )</p>
    
      <p>读写手机存储权限</p>
        应用场景：涉及读写文件系统业务，比如应用信息数据文件缓存、读取<br>
      使用频率：触发相关业务时获取
      <p>访问手机相册权限</p>
      应用场景：开通商户时上传商户照片资料<br>
      使用频率：触发相关业务时获取
      <p>使用照相设备权限</p>
      应用场景：开通商户时上传商户照片资料<br>
      使用频率：触发相关业务时获取
      <p>允许通知权限</p>
      应用场景：动账通知、消息推送<br>
      使用频率：触发相关务时获取
      <p class="ios">获取用户手机权限的场景和频率（ iOS )</p>
      <p>访问手机相册权限</p>
      应用场景：开通商户时上传商户照片资料<br>
      使用频率：触发相关业务时获取
      <p>使用照相设备权限</p>
      应用场景：开通商户时上传商户照片资料<br>
      使用频率：触发相关业务时获取
      <p>使用照相设备权限</p>
      应用场景：开通商户时上传商户照片资料<br>
      使用频率：触发相关业务时获取
      <p>允许通知权限</p>
      应用场景：动账通知、消息推送<br>
      使用频率：触发相关业务时获取
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
.annexThree {
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
  .ios{
    margin: 20px 0;
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