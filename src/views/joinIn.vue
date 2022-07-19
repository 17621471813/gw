<template>
  <div class="joinIn">
    <div class="joinIn-top">
      <div class="step">
        <p>加盟流程</p>
        <div class="step-img"></div>
        <div class="step-name">
          <span>提交申请</span>
          <span>和谈签约</span>
          <span>成为代理</span>
          <span>售后支持</span>
        </div>
      </div>
    </div>
    <div class="joinIn-bottom">
      <div class="wra">
        <div class="title">加盟流程</div>
        <p>请留下您的联系方式与需求，我们将在24小时内安排专人与您洽谈签约</p>
        <div class="from">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="公司名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="主营业务" prop="business">
              <el-input v-model="ruleForm.business"></el-input>
            </el-form-item>
            <el-form-item label="公司地址" prop="adress">
              <el-input v-model="ruleForm.adress"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="people">
              <el-input v-model="ruleForm.people"></el-input>
            </el-form-item>

            <el-form-item label="联系电话" prop="tel">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="留言" prop="remarks">
              <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submit('ruleForm')" class="button">提交申请</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: -1,
      ruleForm: {},
      rules: 
        {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'change' }
          ],
           business: [
            { required: true, message: '请输入主营业务', trigger: 'change' }
          ],
           adress: [
            { required: true, message: '请输入公司地址', trigger: 'change' }
          ],
           people: [
            { required: true, message: '请输入联系人', trigger: 'change' }
          ],
           tel: [
            { required: true, message: '请输入联系电话', trigger: 'change' }
          ],
        }
      ,
    };
  },
  methods:{
    submit(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){

        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.joinIn {
  &-top {
    width: 100%;
    height: 2.8rem;
    background: url("../assets/joinIn/background.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .step {
      width: 9.86rem;
      height: 1.64rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      margin-bottom: -0.11rem;
      border-radius: 0.08rem;
      p {
        margin-bottom: 0.1rem;
        font-size: 0.18rem;
        font-family: Source Han Sans CN-Medium, Source Han Sans CN;
        font-weight: 500;
        color: #e20606;
        margin-top: 0.31rem;
      }
      &-img {
        display: inline-block;
        width: 4.42rem;
        height: 0.5rem;
        background: url("../assets/joinIn/step.png") no-repeat;
        background-size: 100% 100%;
      }
      &-name {
        width: 4.5rem;
        margin-top: 0.17rem;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 0.15rem;
          font-family: Source Han Sans CN-Medium, Source Han Sans CN;
          font-weight: 500;
          color: #3e3e3e;
          line-height: 0px;
        }
      }
    }
  }
  &-bottom {
    height: 7.4rem;
    background: #f9f9f9;
    padding-top: 0.44rem;
    padding-bottom:1rem;
    .wra {
      width: 512px;
      height: 728px;
      margin: 0 auto;
      background: #fff;
      text-align: center;
      padding: 0 2.42rem;
      .title {
        padding-top: 0.6rem;
        font-size: 0.18rem;
        font-family: Source Han Sans CN-Medium, Source Han Sans CN;
        font-weight: 500;
        color: #e20606;
      }
      p {
        margin-top: 0.12rem;
        margin-bottom: 0.5rem;
        font-size: 0.14rem;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #3e3e3e;
      }
      .button {
        width: 1.79rem;
        height: 0.4rem;
        background: #da1e30;
        color:#fff;
        border-radius: 0.2rem;
         margin-top:.3rem;
      }
    }
  }
}
</style>

