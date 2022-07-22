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
        聚合支付技术有限公司成立于2016年，是一家以技术为核心驱动的企业，是国内顶级专业收单机构，我们的战略合作伙伴银盛支付、瑞银信、嘉联支付、易生支付通等持牌第三方支付机构，全国合作伙伴超过10000余家，可为全国的合作伙伴及用户提供专业高效优质的服务。聚合支付技术有限公司相继投资成立了浙江无感信息技术有限公司
        、杭州枢江科技有限公司、浙江优粒信息科技有限公司等科技公司，整合引进了支付行业资深产品技术团队加入，在产品研发、技术创新、市场营销、企业管理等方面具有丰富的实战经验，结合聚合支付多年积累的宝贵资源与经验，自主研发符合全国市场需求的顶尖创新产品，为广大商户及合作伙伴提供“多方位、
        多元化、安全、稳定、快捷”的产品技术整体解决方案和相关运营服务，致力于商家支付、会员营销、店铺运营提供互联网解决方案，为商家提供专业的移动支付收款、营销管理软件、广告、供应链、商家社区等多种服务，全方位解决线下商家的开店需求。
      </div>
    </div>
    <div class="qualifications">
      <h6>企业资质</h6>
      <div class="qualifications-background">
        <dl>
          <dd v-for="(item, index) in blList" :key="index">
            <img :src="item.url" lazy alt="" />
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
      blList: [
        {
          url: require("@/assets/homePage/img_zs01.jpg"),
        },
        {
          url: require("@/assets/homePage/img_zs02.jpg"),
        },
        {
          url: require("@/assets/homePage/img_zs03.jpg"),
        },
        {
          url: require("@/assets/homePage/img_zs04.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.aboutUs {
  &-top {
    height: 4rem;
    background: url("../assets/aboutUs/background.jpg") no-repeat;
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
      margin-top: 1.2rem;
      margin-bottom: 0.56rem;
      h6 {
        position: absolute;
        top: -0.3rem;
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
      line-height: .3rem;
      width: 10.7rem;
      margin-bottom: 1rem;
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
      background: url("../assets/homePage/qc.jpg") no-repeat;
      background-size: 100% 100%;
      dl {
        margin-top: 0.2rem;
        width: 14.24rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        dd {
          width: 2.96rem;
          height: 4.53rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: .25rem;
          }
        }
      }
    }
  }
}
</style>