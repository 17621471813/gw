<template>
  <div class="home">
    <div class="carousel">
      <el-carousel height="5.6rem" :interval="5000">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <el-image class="banner" :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="codeCard">
      <div class="codeCard-left">
        <h6>聚合码牌收款</h6>
        <p>聚合主流收款方式</p>
        <p>实现线上、线下全交易场景覆盖，让您的收款即简单又方便</p>
        <p class="">产品适用：便利店、小吃店、水果店、菜市场等</p>
      </div>
      <el-image lazy :src="codeCard" class="codeCard-right" alt="" />
    </div>
    <div class="app">
      <el-image lazy :src="appUrl" alt="" class="app-left" />
      <div class="app-right">
        <div class="title">
          <div class="title-img"></div>
          <div class="title-word">盈收收APP</div>
        </div>
        <p>不只是收款、在线交易、对账、门店员工管理</p>
        <p>产品适用：服装店、餐饮店等各种店铺、商铺</p>
      </div>
    </div>
    <div class="pos">
      <div class="pos-left">
        <h6>智能POS</h6>
        <p>全渠道收款，支持支付宝、微信等主流移动支付收款</p>
        <p>同时支持储蓄卡、信用卡收款</p>
        <p>产品适用：百货商场、超市、服装行业、医疗行业等</p>
      </div>
      <el-image lazy :src="posUrl" alt="" class="pos-right" />
    </div>
    <div class="achievement"></div>
    <div class="qualifications">
      <h6>企业资质</h6>
      <div class="qualifications-background">
        <dl>
          <dd v-for="(item, index) in blList" :key="index">
            <el-image lazy :src="item.url" alt="" />
          </dd>
        </dl>
      </div>
    </div>
    <div class="partner">
      <h6>合作伙伴</h6>
      <dl class="wrp">
        <dd v-for="(pr, index) in partnerList" :key="pr + index" class="inside">
          <el-image lazy :src="pr.url" alt="" />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bannerList: [
        {
          url: require("@/assets/homePage/banner2.jpg"),
        },
        {
          url: require("@/assets/homePage/banner3.jpg"),
        },
        {
          url: require("@/assets/homePage/banner1.jpg"),
        },
      ],
      codeCard: require("@/assets/homePage/codeCard.jpg"),
      appUrl: require("@/assets/homePage/img_app.jpg"),
      posUrl: require("@/assets/homePage/img_pos.jpg"),
      achievement: require("@/assets/homePage/achievement.jpg"),
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
      partnerList: [
        {
          url: require("@/assets/homePage/partner1.png"),
        },
        {
          url: require("@/assets/homePage/partner2.png"),
        },
        {
          url: require("@/assets/homePage/partner3.png"),
        },
        {
          url: require("@/assets/homePage/partner4.png"),
        },
        {
          url: require("@/assets/homePage/partner5.png"),
        },
        {
          url: require("@/assets/homePage/partner6.png"),
        },
      ],
    };
  },
  created() {
    var d = new Date();

    var hour = d.getHours(); //得到小时数

    var minute = d.getMinutes(); //得到分钟数

    var second = d.getSeconds(); //得到秒
    console.log("首页：", hour + ":" + minute + ":" + second);
    if (window.__PRERENDER_INJECTED.foo) {
      console.log(window.__PRERENDER_INJECTED.foo);
    } else {
      console.log(window);
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  .carousel {
    .banner {
      height: 100%;
      width: 100%;
    }
  }
  .codeCard,
  .app,
  .pos {
    display: flex;
    align-items: center;
    height: 4.7rem;
  }
  .codeCard {
    &-left {
      margin-left: 3.45rem;
      h6 {
        font-size: 36px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #e20606;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.24rem;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
        margin-bottom: 0.1rem;
      }
      P:last-child {
        font-size: 0.18rem;
        font-family: Source Han Sans CN-Light, Source Han Sans CN;
        font-weight: 300;
        color: #e20606;
      }
    }
    &-right {
      display: inline-block;
      width: 3.83rem;
      height: 3.76rem;
      margin-left: 3rem;
    }
  }
  .app {
    &-left {
      width: 5.16rem;
      height: 3.95rem;
      margin-left: 4rem;
    }
    &-right {
      margin-left: 3.4rem;
      .title {
        display: flex;
        align-items: flex-end;
        margin-bottom: 0.2rem;
        &-img {
          width: 0.6rem;
          height: 0.6rem;
          background: url("../assets/homePage/ic_app.png") no-repeat;
          background-size: 100% 100%;
        }
        &-word {
          margin-left: 0.12rem;
          font-size: 0.36rem;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: bold;
          color: #e20606;
        }
      }
      p {
        font-size: 0.24rem;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
        margin-bottom: 0.1rem;
      }
      P:last-child {
        font-size: 0.18rem;
        font-weight: 300;
        color: #e20606;
      }
    }
  }
  .pos {
    &-left {
      margin-left: 3.64rem;
      h6 {
        font-size: 0.36rem;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #e20606;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.24rem;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
        margin-bottom: 0.1rem;
      }
      p:last-child {
        font-size: 0.18rem;
        font-weight: 300;
        color: #e20606;
      }
    }
    &-right {
      margin-left: 3.22rem;
      width: 4.82rem;
      height: 4.65rem;
    }
  }
  .achievement {
    height: 4.75rem;
    background: url("../assets/homePage/achievement.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .qualifications,
  .partner {
    margin-top: 1rem;
    text-align: center;
    h6 {
      font-size: 0.36rem;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: bold;
      color: #e20606;
      margin-bottom: 0.45rem;
    }
  }
  .qualifications {
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
            border-radius: 0.25rem;
          }
        }
      }
    }
  }
  .partner {
    .wrp {
      height: 1.67rem;
      display: flex;
      justify-content: center;
      dd {
        width: 1.4rem;
        margin-left: 0.26rem;
        img {
          width: 1.4rem;
          height: 0.5rem;
        }
      }
    }
  }
}
</style>