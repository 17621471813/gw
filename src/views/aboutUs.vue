<template>
  <div class="aboutUs">
    <div class="aboutUs-top">
      <div class="logo"></div>
    </div>
    <div class="companyProfile">
      <div class="title">
        <h6>公司介绍</h6>
        <p class="title-block"></p>
      </div>
      <div class="companyProfile-content">
      聚合支付技术有限公司成立于2016年，是国内顶级银行卡收单专业服务商之一，我们的战略合作伙伴深圳瑞银信、银盛支付、易生支付、现代金控、海科融通
等持牌第三方支付机构，我们致力于商家支付，会员营销，店铺运营提供互联网解决方案，为商家提供专业的移动支付收款、营销管理软件、广告、供应链、商家社区等多种服务，全方位解决线下商家的开店需求。
      </div>
    </div>
       <div class="qualifications">
      <h6>企业资质</h6>
      <div class="qualifications-background">
        <dl>
          <dd v-for="(item,index) in blList" :key="index" >
            <img :src="item.url" alt="">
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
       blList:[
        {
          url:require("@/assets/homePage/img_zs01.png"),
        },
          {
          url:require("@/assets/homePage/img_zs02.png"),
        },
          {
          url:require("@/assets/homePage/img_zs03.png"),
        },
          {
          url:require("@/assets/homePage/img_zs04.png"),
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.aboutUs {
  &-top {
    height: 4rem;
    background: url("../assets/aboutUs/background.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      width: 4.66rem;
      height: 1.26rem;
      background: url("../assets/aboutUs/logo.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .companyProfile {
    .title {
      position: relative;
      display: flex;
      justify-content: center;
      margin-top:1.2rem;
      margin-bottom:.56rem;
      h6 {
        position: absolute;
        top:-.3rem;
        font-size: 0.36rem;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #e20606;
      }
      &-block {
        width: 1.63rem;
        height: 0.18rem;
        background: #feeded;
        border-radius: 0.09rem;
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    &-content {
      text-indent: 2em;
         width: 10.7rem;
         margin-bottom:1rem;
    }
  }
    .qualifications {
        text-align: center;
    h6 {
      font-size: 0.36rem;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: bold;
      color: #e20606;
      margin-bottom: 0.45rem;
    }
    &-background {
      height: 6.43rem;
      background: url("../assets/homePage/qc.png") no-repeat;
      background-size: 100% 100%;
      dl{
        margin-top:.2rem;
        width:14.24rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        dd{
            width:2.96rem;
            height: 4.53rem;
            img{
              width:100%;
              height: 100%;
            }
        }
      }
    }
  }
}
</style>