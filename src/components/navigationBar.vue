<template>
  <div class="navigationBar">
    <div class="nav">
      <div class="nav-left">
        <img @click="toHome" :src="logo" alt="" />
      </div>
      <dl class="nav-right">
        <dd v-for="(item, index) in navList" :key="item + index">
          <div
            @mouseleave="leaveMenu(index)"
            @mouseenter="sonMenu(index)"
            @click="navClick(index)"
            :class="{ selectCor: selectIndex == index }"
            class="part"
          >
            <div class="cont">
              {{ item }}
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <div
      @mouseleave="leaveMenu()"
      @mouseenter="enter()"
      :class="[isPro ? 'show' : 'hidden']"
      class="pro-nav"
    >
      <dl class="cashier">
        <dt>收银产品</dt>
        <dd
          @click="handClick(index)"
          :class="{ selectCor: proIndex == index }"
          v-for="(item, index) in proList"
          :key="item + index"
        >
          {{ item }}
        </dd>
      </dl>
      <dl class="Marketing">
        <dt>管理/营销产品</dt>
        <dd @click="onMarke" :class="{ selectCor: proIndex == 3 }">
          盈收收展业版APP
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Bus from "utils/bus.js";
export default {
  name: "",
  data() {
    return {
      logo: require("@/assets/logo/logo.png"),
      navList: ["首页", "产品中心", "合作加盟", "关于我们", "服务商登录"],
      selectIndex: 0,
      proList: ["盈收收APP", "聚合码收款", "智能POS"],
      proIndex: -1,
      isMarke: false,
      isPro: false,
      time: null,
    };
  },
  created() {
    Bus.$on("pro", () => {
      this.selectIndex = 2;
    });
    let herf = window.location.href;
    if (herf.indexOf("productCenter") > 0) {
      this.selectIndex = 1;
    } else if (herf.indexOf("joinIn") > 0) {
      this.selectIndex = 2;
    } else if (herf.indexOf("aboutUs") > 0) {
      this.selectIndex = 3;
    }
  },
  methods: {
    navClick(index) {
      if (index != 1) {
        this.selectIndex = index;
      }
      switch (index) {
        case 0:
          this.$router.push({ path: "/" });
          break;
        case 1:
          break;
        case 2:
          this.$router.push({ path: "joinIn" });
          break;
        case 3:
          this.$router.push({ path: "/aboutUs" });
          break;
        case 4:
          window.location.href = "https://sps.yoliinfo.com/";
          break;
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    sonMenu(index) {
      if (index == 1) {
        clearTimeout(this.time);
        this.$nextTick(() => {
          this.isPro = true;
        });
      }
    },
    enter() {
      clearTimeout(this.time);
    },
    leaveMenu() {
      this.time = setTimeout(() => {
        this.isPro = false;
      }, 100);
    },
    handClick(index) {
      this.proIndex = index;
      this.$router.replace({
        path: "/productCenter",
        query: {
          index,
        },
      });
      this.isPro = false;
      this.selectIndex = 1;
    },
    onMarke() {
      this.proIndex = 3;
      this.$router.push({
        path: "/productCenter",
        query: {
          index: 3,
        },
      });
      this.isPro = false;
      this.selectIndex = 1;
    },
    toHome() {
      this.$router.push("/");
      this.selectIndex = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.navigationBar {
  width: 100vw;
  z-index: 999;
  .nav {
    width: 19.2rem;
    height: 0.83rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.05);
    border-bottom: 0.02rem solid #da381b;
    &-left {
      display: flex;
      margin-left: 2.4rem;
      img {
        width: 1.68rem;
        height: 0.46rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &-right {
      display: flex;
      margin-right: 1.4rem;
      background: #fff;
      z-index: 0;
      height: 98%;
      dd {
        .part {
          margin-left: 0.5rem;
          padding: 0 0.1rem;
          display: flex;
          align-items: center;
          height: 0.8rem;
          font-size: 15px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #1d1d1d;
          &:hover {
            cursor: pointer;
            color: #da381b;
            font-weight: 800;
          }
        }

        .selectCor {
          color: #da381b;
          font-weight: 800;
          border-bottom: 3px solid #da381b;
        }
      }
      dd:last-child {
        .cont {
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #da381b;
          border-radius: 0.19rem;
          font-size: 0.15rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
  }

  .pro-nav {
    position: fixed;
    width: 6rem;
    background: #fff;
    border-radius: 0px;
    right: 1.4rem;
    z-index: -1;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.2rem;
    box-shadow: 0px 2px 2px 2px rgba(153, 153, 153, 0.5);
    min-width: 300px;
    .cashier,
    .Marketing {
      dt {
        font-size: 0.14rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #656a72;
        padding-top: 0.25rem;
        padding-bottom: 0.15rem;
        width: 1.6rem;
        border-bottom: 0.01rem solid #dee0e3;
        text-align: center;
      }
      dd {
        padding: 10px 0;
        text-align: center;
        font-size: 15px;
        &:hover {
          cursor: pointer;
          color: #d4361a;
        }
      }
      .selectCor {
        color: #d4361a;
      }
    }
  }
  .show {
    top: 0.8rem;
    opacity: 1;
    transition: all 0.3s linear;
  }
  .hidden {
    top: -1.27rem;
    opacity: 0;
    transition: all 0.3s linear;
  }
}
</style>