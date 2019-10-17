<template>
  <div id="app">
    <div id="nav" :hidden="$store.state.hidnav">
      <tabs v-model="curActive" @click="onClick" animated swipeable>
        <tab title="全部" to="/"></tab>
        <tab title="图片" to="/picture" />
        <tab title="段子" to="/duanzi" />
        <tab title="视频" to="/video" />
        <tab title="我的" to="/about" />
      </tabs>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  name: "app",
  data() {
    return {
      active: window.sessionStorage.getItem("currentActive")
    };
  },
  computed: {
    curActive: {
      get: function() {
        return Number(this.active);
      },
      set: function() {}
    }
  },
  components: {
    Tab,
    Tabs
  },
  methods: {
    onClick(index) {
      //记录当前tab，防止刷新重置
      window.sessionStorage.setItem("currentActive", index);
    }
  }
};
</script>

<style lang="scss">
body {
  -webkit-text-size-adjust: 100% !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}
#nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
// 查看层级视图，可知
.van-ellipsis {
  font-size: 17px;
}
</style>
