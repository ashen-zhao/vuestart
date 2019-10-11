<template>
  <div id="app">
    <div id="nav">
      <tabs @click="onClick">
        <tab title="首页"></tab>
        <tab title="我的"></tab>
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
  },
  methods: {
    onClick(name, title) {
      if (name == "0") {
        this.$router.push("/");
      } else {
        this.$router.push("/about");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
}

</style>
