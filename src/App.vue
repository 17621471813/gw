<template>
  <div id="app">
    <navigation-bar class="navBar"/>
    <router-view>
    </router-view>
    <copyright-bt/>
  </div>

</template>

<script>
import navigationBar from "@/components/navigationBar.vue";
import copyrightBt from "@/components/copyright.vue";
export default {
  components:{
 navigationBar,
 copyrightBt
  },
  data() {
    return {
      
    };
  },
 
};
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
}
#app{
  overflow-x: hidden;
  padding-top:.83rem;
  .navBar{
    position: fixed;
    background: #FFFFFF;
    top:0;
    z-index:999;
  }
}
</style>
