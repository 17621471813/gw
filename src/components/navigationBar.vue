<template>
  <div class="navigationBar">
    <div class="navigationBar-left">
      <img @click="toHome" :src="logo" alt="" />
    </div>
    <dl class="navigationBar-right">
      <dd v-for="(item, index) in navList" :key="item + index">
        <div
          @click="navClick(index)"
          :class="{ selectCor: selectIndex == index }"
          class="part"
        >
          {{ item }}
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import Bus from 'utils/bus.js';
export default {
  name: "",
  data() {
    return {
      logo: require("@/assets/logo/logo.png"),
      // navList: ["首页", "产品中心", "合作加盟", "资讯信息", "关于我们"],
      navList: ["首页", "产品中心", "合作加盟", "关于我们"],
      selectIndex: 0,
    };
  },
  created() {
    Bus.$on('pro',()=>{
      this.selectIndex = 2;
    });
    let herf = window.location.href;
        if (herf.indexOf("productCenter") > 0) {
      this.selectIndex = 1;
    } else if (herf.indexOf("joinIn") > 0) {
      this.selectIndex = 2;
    }else if (herf.indexOf("aboutUs") > 0) {
      this.selectIndex = 3;
    }
    // if (herf.indexOf("productCenter") > 0) {
    //   this.selectIndex = 1;
    // } else if (herf.indexOf("joinIn") > 0) {
    //   this.selectIndex = 2;
    // } else if (herf.indexOf("information") > 0) {
    //   this.selectIndex = 3;
    // } else if (herf.indexOf("aboutUs") > 0) {
    //   this.selectIndex = 4;
    // }
  },
  methods: {
    navClick(index) {
      this.selectIndex = index;
      switch (index) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/productCenter");
          break;
        case 2:
          this.$router.push("/joinIn");
          break;
           case 3:
          this.$router.push("/aboutUs");
          break;
        // case 3:
        //   this.$router.push("/information");
        //   break;
        // case 4:
        //   this.$router.push("/aboutUs");
        //   break;
      }
    },
    toHome () {
      this.$router.push("/");
      this.selectIndex = 0;
    }

  },
};
</script>

<style lang="less" scoped>
.navigationBar {
  width: 19.2rem;
  height: 0.83rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.05);
  border-bottom:.02rem solid #DA381B;
  &-left {
    display: flex;
    margin-left: 2.4rem;
    img {
      width: 1.68rem;
      height: 0.46rem;
      &:hover{
        cursor: pointer;
      }
    }
  }
  &-right {
    display: flex;
    margin-left: 7rem;
    dd {
      .part {
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.23rem;
        font-size: 15px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #1d1d1d;
        &:hover {
          cursor: pointer;
        }
      }
      .selectCor {
        border-bottom: 3px solid #da381b;
      }
    }
  }
}
</style>