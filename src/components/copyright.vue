<template>
  <div class="copyright">
    <div class="copyright-top">
      <div class="logoName"></div>
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
        <p>企业邮箱：8888@hzzy888.com</p>
        <p>企业QQ：88888888</p>
      </div>
    </div>
    <div class="copyright-bottom">
      Copyright © 2014-2022 优粒 版权所有 All Rights Reserved. 浙ICP
      23423423423423
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
    .logoName {
      width: 1.26rem;
      height: 0.54rem;
      margin-left: 2.91rem;
      background: url("../assets/homePage/logo&name.png") no-repeat;
      background-size: 100% 100%;
    }
    .tel {
      margin-bottom: 0.1rem;
      margin-left: 2.08rem;
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
    .adress {
        margin-left:2.08rem;
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
      p{
          margin-left:.5rem;
         font-size: .14rem;
font-family: Microsoft YaHei-Regular, Microsoft YaHei;
font-weight: 400;
color: #FFFFFF; 
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