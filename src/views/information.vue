<template>
  <div class="information">
    <div class="information-top"></div>
    <div class="information-bottom">
      <dl v-if="!isDetails">
        <dd>
          <img src="" alt="" />
          <div @click="toDetails" class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
        <dd>
          <img src="" alt="" />
          <div class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
        <dd>
          <img src="" alt="" />
          <div class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
        <dd>
          <img src="" alt="" />
          <div class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
        <dd>
          <img src="" alt="" />
          <div class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
        <dd>
          <img src="" alt="" />
          <div class="details">
            <div class="details-title">
              中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
            </div>
            <div class="source">
              <span>2021-11-26 10:10</span>
              <span>来源于</span><span>人民网</span>
            </div>
            <div class="details-content">
              50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方
            </div>
          </div>
        </dd>
      </dl>
      <div v-if="!isDetails" class="pag">
        <span class="hover" @click="last">上一页</span>
        <span>{{ current }}/{{ total }}</span>
        <span class="hover" @click="next">下一页</span>
      </div>
      <!-- 详情 -->
      <div v-if="isDetails" class="part-details">
        <div class="title">
          中美双方互相打开了大门就不应再关上总理谈中美关系，中美双方互相打开了大门就不应再关上总理谈中美关系
        </div>
        <div class="source">
          <span>2021-11-26 10:10</span>
          <span>&nbsp;&nbsp;来源于</span>
          <span>&nbsp;&nbsp;人民网</span>
        </div>
        <div class="content">
          50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。
          我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰。
          我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。我们还是希望双方按照两国元首在去年年底视频会晤时达成的共识，要相互尊重、和平共处、合作共赢，以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。以理性和建设性的方50年前中美两国打破坚冰，开启了关系正常化的航程。半个世纪过去，两国关系虽然时有磕磕碰碰，但是一直是向前发展的。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 5,
      isDetails: false,
    };
  },
  methods: {
    last() {
      if (this.current > 1) {
        this.current--;
      }
    },
    next() {
      if (this.current < 5) {
        this.current++;
      }
    },
    toDetails() {
      this.isDetails = true;
    },
  },
};
</script>

<style lang="less" scoped>
.information {
  position: relative;
  background: #f8f8f8;
  padding-bottom: 1rem;
  &-top {
    height: 2.8rem;
    background: url("../assets/information/background.png") no-repeat;
    background-size: 100% 100%;
  }
  &-bottom {
    width: 12.1rem;
    background: #fff;
    margin: 0 auto;
    margin-top: -1.53rem;
    padding: 0.35rem 0;
    border-radius: 0.08rem;
    dl {
      dd {
        width: 10.7rem;
        height: 2rem;
        padding: 0.35rem 0;
        margin: 0 auto;
        border-bottom: 0.01rem solid #ececec;
        display: flex;
        img {
          display: inline-block;
          width: 3.2rem;
          height: 2rem;
          border: 1px solid red;
        }
        .details {
          margin-left: 0.4rem;
          &-title {
            margin-top: 0.07rem;
            height: 0.7rem;
            font-size: 0.22rem;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
            color: #1d1d1d;
          }
          .source {
            margin-top: 0.12rem;
            margin-bottom: 0.24rem;
            span {
              font-size: 0.14rem;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #1d1d1d;
            }
          }
          &-content {
            font-size: 0.16rem;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #1d1d1d;
          }
        }
      }
    }
    .pag {
      width: 100%;
      text-align: center;
      margin-top: 0.35rem;
      span {
        margin-left: 0.14rem;
        font-size: 0.14rem;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #1d1d1d;
      }
      .hover:hover {
        cursor: pointer;
      }
    }
    .part-details {
      padding: 0 0.7rem;
      .title {
        height: 0.64rem;
        font-size: 0.24rem;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #1d1d1d;
        margin-top: 0.77rem;
      }
      .source {
        margin-top: 0.12rem;
        margin-bottom: 0.3rem;
        span {
          font-size: 0.14rem;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #1d1d1d;
        }
      }
      .content{
        border-top:.01rem solid #ECECEC;
        line-height: .3rem;
        text-indent: 2em;
        padding: .6rem 0;
      }
    }
  }
}
</style>