<template>
  <div id="app">
    <div id="nav">
      <tabs @click="onClick">
        <tab title="百思"></tab>
        <tab title="名片"></tab>
        <tab title="我的"></tab>
      </tabs>
    </div>
    <div class="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  name: "app",
  components: {
    Tab,
    Tabs
  },
  methods: {
    onClick(index) {
      switch (index) {
        case 0:
          {
            this.$router.push("/");
          }
          break;
        case 1:
          {
            this.$router.push("/person");
          }
          break;
        case 2:
          {
            this.$router.push("/about");
          }
          break;
      }
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-top: 10px;
}
.content {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  /* padding-top: 60px; */
}
</style>
