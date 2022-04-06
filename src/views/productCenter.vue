<template>
  <div class="productCenter">
    <ul class="productCenter-nav">
      <li
        @click="handClick(index)"
        :class="{ selectCor: selectIndex == index }"
        v-for="(item, index) in navList"
        :key="item+index"
      >
        {{ item }}
      </li>
    </ul>
    <div class="background"></div>
    <div v-if="selectIndex == 0" class="cc">
      <div class="codeCard"></div>
      <div class="details">
        <h6>聚合码牌收款</h6>
        <p>聚合主流收款方式，多种收款方式</p>
        <p>实现线上、线下全交易场景覆盖，让你的收款即简单又方便</p>
        <el-button @click="toJoinIn">
          <span>合作加盟</span>
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <dl class="images">
        <dd v-for="(item,index) in ccList" :key="item +index">
          <img :src="item.url" alt="" />
        </dd>
      </dl>
    </div>
    <div v-if="selectIndex == 1" class="app">
      <div class="app-right"></div>
      <div class="app-left">
        <h6>盈收收APP</h6>
        <p class="explain">不止是收款、在线交易、对账、门店员工</p>
        <div class="system">
          <div class="android">
            <div class="android-icon"></div>
            <div class="android-down">
              <p>点击下载</p>
              <p>Android客户端</p>
            </div>
          </div>
          <div class="ipone">
            <div class="ipone-icon"></div>
            <div class="ipone-down">
              <p>点击下载</p>
              <p>IPhone客户端</p>
            </div>
          </div>
        </div>
        <img src="" alt="" class="qrCode" />
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
    <div v-if="selectIndex == 2" class="pos">
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
  </div>
</template>

<script>
import Bus from 'utils/bus.js';
export default {
  name: "ProductCenter",
  data() {
    return {
      navList: ["聚合码收款", "盈收收APP", "智能POS"],
      selectIndex: 0,
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
  methods: {
    handClick(index) {
      this.selectIndex = index;
    },
    toJoinIn(){
      this.$router.replace("/joinIn");
       Bus.$emit("pro");
    }
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
    border-radius: 0.2rem;
    i {
      margin-left: 0.1rem;
    }
  }
  position: relative;
  &-nav {
    position: fixed;
    top: 0.85rem;
    height: 0.4rem;
    display: flex;
    align-items: center;
    padding-left: 12rem;
    z-index: 999;
    background: rgba(255, 255, 255);
    width: 100%;
    li {
      margin-right: 0.6rem;
      font-size: 0.15rem;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #606060;
      &:hover {
        cursor: pointer;
      }
    }
    .selectCor {
      color: #d4361a;
    }
  }
  .background {
    margin-top: 0.4rem;
    height: 2.8rem;
    background: url("../assets/productCenter/background.png") no-repeat;
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
        margin-bottom: 0.43rem;
      }
      .system {
        display: flex;
        .android,
        .ipone {
          width: 2.15rem;
          height: 0.68rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e20606;
          border-radius: 0.07rem 0.07rem 0.07rem 0.07rem;
          &:hover {
            cursor: pointer;
          }
          &-down {
            margin-left: 0.1rem;
            font-size: 0.18rem;
            font-family: Microsoft YaHei-Light, Microsoft YaHei;
            font-weight: 300;
            color: #ffffff;
          }
        }
        .ipone {
          margin-left: 0.39rem;
          &-icon {
            width: 0.36rem;
            height: 0.44rem;
            background: url("../assets/productCenter/ic_ios.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .android {
          &-icon {
            width: 0.36rem;
            height: 0.44rem;
            background: url("../assets/productCenter/ic_android.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .qrCode {
        display: inline-block;
        width: 0.87rem;
        height: 0.87rem;
        margin-top: 0.08rem;
        border: 1px solid red;
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
        }
        p:last-child {
          font-size: 0.24rem;
          color: #777777;
          margin-top: 0.2rem;
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
}
</style>