<template>
  <div class="productCenter">
    <div class="background"></div>
    <div v-if="rou == 1" class="cc">
      <div class="codeCard"></div>
      <div class="details">
        <h6>聚合码牌收款</h6>
        <p>聚合主流收款方式</p>
        <p>实现线上、线下全交易场景覆盖，让你的收款即简单又方便</p>
        <el-button  @click="toJoinIn">
          合作加盟
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <dl class="images">
        <dd v-for="(item, index) in ccList" :key="item + index">
          <img :src="item.url" lazy alt="" />
        </dd>
      </dl>
    </div>
    <div v-if="rou == 0" class="app">
      <div class="app-right"></div>
      <div class="app-left">
        <h6>盈收收APP</h6>
        <p class="explain">不止是收款、在线交易、对账、门店员工</p>
        <div class="down">
          <div class="code">
            <img lazy :src="mchAndroidCode" />
            <span> 扫码下载Android客户端 </span>
          </div>
          <div class="code">
            <img
              lazy
              alt=""
              src="https://api.qrserver.com/v1/create-qr-code?data=https://apps.apple.com/us/app/id1624646068"
            />
            <span> 扫码下载iPhone客户端 </span>
          </div>
        </div>
        <img src="" alt="" lazy class="qrCode" />
      </div>
      <div class="app-bottom">
        <div class="img"></div>
        <div class="content">
          <p>支持多种收款方式，收款秒到账</p>
          <p>并提供日账单、月账单</p>
          <p>轻松搞定收款、对账，再也不用担心对账效率低且容易出现差错了</p>
        </div>
      </div>
    </div>
    <div v-if="rou == 2" class="pos">
      <div class="pos-left">
        <h6>智能POS</h6>
        <p>全渠道收款，支持支付宝、微信等主流移动支付收款</p>
        <p>同时支持储蓄卡、信用卡收款</p>
        <p>产品适用：百货商场、超市、服装行业、医疗行业等</p>
        <el-button @click="toJoinIn">
          <span>合作加盟</span>
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <div class="pos-right"></div>
      <div class="pos-bottom">
        <div class="pos2"></div>
        <div class="pos3"></div>
        <div class="content">
          <h6>多种产品型号</h6>
          <p>轻松搞定收款、对账，再也不用担心对账效率低且容易出现差错了</p>
        </div>
      </div>
    </div>
    <div v-if="rou == 3" class="markeApp">
      <div class="part">
        <div class="part-left">
          <p>盈收收展业版APP</p>
          <p>服务商管理，商户管理，码牌管理</p>
          <p>帮组服务商快速管理并发展自己的团队及商户</p>
          <div class="down">
            <div class="code">
              <img lazy :src="androidCode" />
              <span> 扫码下载Android客户端 </span>
            </div>
            <div class="code">
              <img
                lazy
                alt=""
                src="https://api.qrserver.com/v1/create-qr-code?data=https://apps.apple.com/cn/app/%E7%9B%88%E6%94%B6%E6%94%B6%E5%B1%95%E4%B8%9A%E7%89%88/id1622357088"
              />
              <span> 扫码下载iPhone客户端 </span>
            </div>
          </div>
        </div>
        <div class="part-right">
          <img :src="appUrl" lazy alt="" />
        </div>
      </div>
      <div class="content">
        <img :src="cpUrl" alt="" lazy class="content-left" />
        <div class="content-right">
          <p>服务商/商户一键入网/进件</p>
          <p>并实时管理服务商/商户信息</p>
          <p>
            轻松搞定服务商/商户入网/进件，再也不用担心因入网不及时而丢失客户
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "utils/bus.js";
export default {
  name: "ProductCenter",
  data() {
    return {
      androidCode: "",
      mchAndroidCode: "",
      selectIndex: 0,
      cpUrl: require("@/assets/productCenter/img_cp.png"),
      appUrl: require("@/assets/productCenter/img_app.png"),
      ccList: [
        {
          url: require("@/assets/productCenter/cc2.png"),
        },
        {
          url: require("@/assets/productCenter/cc3.png"),
        },
        {
          url: require("@/assets/productCenter/cc4.png"),
        },
      ],
    };
  },
  created() {
    this.getAndroidCode();
  },
  computed: {
    rou() {
      return this.$route.query.index;
    },
  },
  watch: {
    rou(newVal, oldVal) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  methods: {
    getAndroidCode() {
      let url =
        "https://heimdall.yoliinfo.com/manager/anonymous/system/verInfo";
      const params = {
        version: "1.0.0",
        versionBizTypeEnum: "ANDROID",
        platform: "SPS",
      };
      this.$axios.post(url, params).then((res) => {
        if (res.data.code == "200") {
          this.androidCode = `https://api.qrserver.com/v1/create-qr-code?data=${res.data.result.url}`;
        }
      });
      const mchParams = {
        version: "1.0.0",
        versionBizTypeEnum: "ANDROID",
        platform: "MPS",
      };
      this.$axios.post(url, mchParams).then((res) => {
        if (res.data.code == "200") {
          this.mchAndroidCode = `https://api.qrserver.com/v1/create-qr-code?data=${res.data.result.url}`;
        }
      });
    },

    toJoinIn() {
      this.$router.replace("/joinIn");
      Bus.$emit("pro");
    },
  },
};
</script>

<style lang="less" scoped>
.productCenter {
  h6 {
    font-size: 0.36rem;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: bold;
    color: #e20606;
    margin-bottom: 0.2rem;
  }
  .el-button {
    width: 1.79rem;
    height: 0.4rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e20606;
    color:#fff;
    border-radius: 0.2rem;
    i {
      margin-left: 0.1rem;
    }
  }
  position: relative;

  .background {
    height: 2.8rem;
    background: url("../assets/productCenter/background.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .cc {
    .codeCard {
      position: absolute;
      width: 6.94rem;
      height: 3.91rem;
      right: 2.66rem;
      top: 2.2rem;
      background: url("../assets/productCenter/cc1.png") no-repeat;
      background-size: 100% 100%;
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 3.3rem;
      margin-left: 3.01rem;
      p {
        font-size: 0.24rem;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
        margin-bottom: 0.1rem;
      }
    }
    .images {
      padding: 0.8rem 2.75rem;
      display: flex;
      justify-content: space-between;
      dd {
        width: 4rem;
        height: 2.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .app {
    position: relative;
    &-left {
      margin-left: 3.4rem;
      padding-top: 1.04rem;
      .explain {
        font-size: 0.24rem;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
      }
      .down {
        display: flex;
        .code {
          margin-right: 0.38rem;
          width: 1.8rem;
          margin-top: 0.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 1.8rem;
            height: 1.8rem;
            margin-bottom: 0.1rem;
          }
          span {
            white-space:nowrap;
            font-size: 0.14rem;
            font-family: Source Han Sans CN;
            font-weight: 300;
            line-height: 34px;
            color: #1d1d1d;
          }
        }
      }
      .qrCode {
        display: inline-block;
        margin-top: 0.08rem;
        margin-left: 3.2rem;
      }
    }
    &-right {
      position: absolute;
      width: 4.3rem;
      height: 4.8rem;
      top: -0.8rem;
      right: 3.29rem;
      background: url(../assets/productCenter/app1.png) no-repeat;
      background-size: 100% 100%;
    }
    &-bottom {
      display: flex;
      align-items: center;
      background: #f9f9f9;
      padding-top: 0.79rem;
      padding-bottom: 0.54rem;
      .img {
        width: 3rem;
        height: 3.76rem;
        margin-left: 4.09rem;
        background: url(../assets/productCenter/app2.png) no-repeat;
        background-size: 100% 100%;
      }
      .content {
        margin-left: 1.5rem;
        p {
          font-size: 0.36rem;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: bold;
          color: #e20606;
          margin-top:.2rem;
        }
        p:last-child {
            font-size: 0.24rem;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 400;
        color: #777777;
        }
      }
    }
  }
  .pos {
    position: relative;
    &-left {
      margin-top: 0.86rem;
      padding-bottom: 0.89rem;
      margin-left: 3.01rem;
      p {
        font-size: 0.24rem;
        margin-bottom: 0.1rem;
        font-family: Source Han Sans CN-Light, Source Han Sans CN;
        font-weight: 300;
        color: #777777;
      }
      p:nth-child(4) {
        font-size: 0.18rem;
        font-weight: 300;
        color: #e20606;
      }
    }
    &-right {
      position: absolute;
      top: -2.2rem;
      left: 9.6rem;
      width: 6.94rem;
      height: 3.91rem;
      background: url(../assets/productCenter/pos1.png) no-repeat;
      background-size: 100% 100%;
    }
    &-bottom {
      background: #f9f9f9;
      padding-top: 0.79rem;
      padding-bottom: 0.65rem;
      display: flex;
      align-items: center;
      .pos2 {
        width: 2.96rem;
        height: 2.96rem;
        margin-left: 2.4rem;
        background: url(../assets/productCenter/pos2.png) no-repeat;
        background-size: 100% 100%;
      }
      .pos3 {
        width: 2.96rem;
        height: 2.96rem;
        margin-left: 0.2rem;
        background: url(../assets/productCenter/pos3.png) no-repeat;
        background-size: 100% 100%;
      }
      .content {
        margin-left: 1.08rem;
        p {
          font-size: 0.24rem;
          font-family: Source Han Sans CN-Normal, Source Han Sans CN;
          font-weight: 400;
          color: #4b4b4b;
        }
      }
    }
  }
  .markeApp {
    .part {
      width: 100%;
      height: 5.1rem;
      display: flex;
      &-left {
        margin-left: 3rem;
        p:nth-child(1) {
          font-size: 0.36rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #e20606;
          margin-top: 0.8rem;
        }
        P:nth-child(2) {
          font-size: 0.24rem;
          font-family: Source Han Sans CN;
          font-weight: 300;
          line-height: 34px;
          color: #777777;
          margin-top: 0.1rem;
        }
        p:nth-child(3) {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 300;
          line-height: 24px;
          color: #e20606;
          margin-top: 0.05rem;
        }
        .down {
          display: flex;
          .code {
            margin-right: 0.38rem;
            width: 1.8rem;
            margin-top: 0.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 1.8rem;
              height: 1.8rem;
              margin-bottom: 0.1rem;
            }
            span {
              font-size: 0.14rem;
              white-space:nowrap;
              font-family: Source Han Sans CN;
              font-weight: 300;
              line-height: 34px;
              color: #1d1d1d;
            }
          }
        }
      }
      &-right {
        margin-left: 3.46rem;
        margin-top: -1.4rem;
        img {
          width: 3.03rem;
          height: 6.18rem;
        }
      }
    }
    .content {
      width: 100%;
      height: 5.1rem;
      background: #f9f9f9;
      display: flex;
      &-left {
        width: 3.05rem;
        height: 3.76rem;
        margin-left: 4.09rem;
        margin-top: 0.79rem;
      }
      &-right {
        margin-left: 1.5rem;
        margin-top: 1.4rem;
        p {
          font-size: 0.36rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #e20606;
          margin-bottom: 0.1rem;
        }
        p:nth-child(3) {
          font-size: 0.24rem;
          font-weight: 400;
          color: #777777;
        }
      }
    }
  }
}
</style>