<template>
  <div id="app">
    <navigation-bar/>
    <router-view>
    </router-view>
  </div>

</template>

<script>
import navigationBar from "@/components/navigationBar.vue";
export default {
  components:{
 navigationBar
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
}
</style>
