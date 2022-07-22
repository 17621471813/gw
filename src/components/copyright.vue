<template>
  <div class="copyright">
    <div class="copyright-top">
      <div class="logo-wra">
        <div class="logo"></div>
           <div class="oa"></div>
        <div class="spr"></div>
        <div class="mch"></div>
      </div>
      <div class="tel">
        <div class="tel-img">
          <div class="tel-img-left"></div>
          <div class="tel-img-right">服务热线</div>
        </div>
        <p>400 000 8807</p>
        <p>7x24小时全年无休</p>
      </div>

      <div class="adress">
        <div class="adress-img">
          <div class="adress-img-left"></div>
          <div class="adress-img-right">联系我们</div>
        </div>
        <p>杭州市江干区杭海路601号三堡产业大厦A幢1939室</p>
        <p>企业邮箱：pay@yoliinfo.com</p>
        <p>客服QQ：352815551</p>
      </div>
    </div>
    <div class="copyright-bottom">
      Copyright © 2014-2022 优粒 版权所有 All Rights Reserved.
      浙ICP备2022003452号-1
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.copyright {
  &-top {
    height: 2.92rem;
    background: #c40606;
    display: flex;
    align-items: center;
    .logo-wra {
      display: flex;
      align-items: center;
      margin-left: 1.4rem;
      .logo {
        width: 1.26rem;
        height: 0.54rem;
        margin-left: 0.56rem;
        background: url("../assets/homePage/logo.png") no-repeat;
        background-size: 100% 100%;
      }
      .oa {
        width: 1rem;
        height: 1rem;
        margin-left: 0.56rem;
        background: url("../assets/homePage/oa.jpg") no-repeat;
        background-size: 100% 100%;
        &::after {
          content: "官方公众号";
        }
      }

      .spr {
        width: 1rem;
        height: 1rem;
        margin-left: 0.4rem;
        background: url("../assets/homePage/app.png") no-repeat;
        background-size: 100% 100%;
         &::after {
          content: "盈收收展业版APP";
        }
      }
      .mch{
           width: 1rem;
        height: 1rem;
        margin-left: 0.4rem;
        background: url("../assets/homePage/mch.png") no-repeat;
        background-size: 100% 100%;
         &::after {
          content: "盈收收APP";
        }
      }
    }
    .tel {
      margin-bottom: 0.1rem;
      margin-left: 2.5rem;
      &-img {
        display: flex;
        align-items: center;
        &-left {
          width: 0.4rem;
          height: 0.4rem;
          background: url("../assets/homePage/tel.png") no-repeat;
          background-size: 100% 100%;
        }
        &-right {
          margin-left: 0.1rem;
          font-size: 0.2rem;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
        }
      }
      p {
        margin-left: 0.5rem;
        font-size: 0.2rem;
        font-family: DIN-Regular, DIN;
        font-weight: 400;
        color: #ffffff;
      }
      P:last-child {
        font-size: 0.14rem;
        font-weight: 300;
      }
    }
    .oa,
    .spr,
    .mch {
      &::after {
        display: block;
        width: 100%;
        top: 100%;
        position: relative;
        text-align: center;
        font-size: 0.1rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #fff;
        margin-top: 5px;
      }
    }
    .adress {
      margin-left: 1.5rem;
      &-img {
        display: flex;
        align-items: center;
        &-left {
          width: 0.32rem;
          height: 0.4rem;
          background: url("../assets/homePage/posi.png") no-repeat;
          background-size: 100% 100%;
        }
        &-right {
          margin-left: 0.1rem;
          font-size: 0.2rem;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
        }
      }
      p {
        margin-left: 0.5rem;
        font-size: 0.14rem;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.7rem;
    background: #970000;
    font-size: 0.14rem;
    font-family: Microsoft YaHei-Light, Microsoft YaHei;
    font-weight: 300;
    color: #ffffff;
  }
}
</style>