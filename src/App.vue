<template>
  <div id="app">
    <div id="nav">
      <tabs @click="onClick">
        <tab title="百思"></tab>
        <tab title="名片"></tab>
        <tab title="我的"></tab>
      </tabs>
    </div>
    <keep-alive >
      <router-view class="content" />
    </keep-alive>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  name: "app",
  data() {
    return {
      currentTab: 0
    };
  },
  components: {
    Tab,
    Tabs
  },
  methods: {
    onClick(index) {
      if (this.currentTab != index) {
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
        this.currentTab = index;
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
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-top: 10px;
}
.content {
  margin-top: 60px; 
}
</style>
