<template>
  <div id="app">
    <div id="nav" :hidden="$store.state.hidnav">
      <tabs>
        <tab title="图片" to="/picture" />
        <tab title="段子" to="/" />
        <tab title="名片" to="/person" />
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
  components: {
    Tab,
    Tabs
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
  padding-top: 10px;
}
</style>
