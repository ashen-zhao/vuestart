<template>
  <div class="container">
    <nav-bar title="为何要进来" class="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="iframe-box">
      <iframe id="bdIframe" :src="this.$route.query.src" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { HID_NAV } from "@/mutations-types.js";
import { NavBar } from "vant";

// 如果是APP，则不采取这种方式。
// APP的话，则让app再开一个webview
export default {
  name: "urlFrame",
  components: {
    NavBar
  },
  activated() {
    this.$store.commit(HID_NAV, true);
  },
  deactivated() {
    this.$store.commit(HID_NAV, false);
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  .title {
    background-color: #f5f5f5;
    position: fixed;
    z-index: 99;
    height: 44px;
    top: 0;
    left: 0;
    right: 0;
    line-height: 44px;
  }
  .iframe-box {
    padding-top: 44px;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    height: 10000px;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>