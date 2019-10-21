<template>
  <div class="container">
    <div class="login" @click="loginAction">模拟登录</div>
  </div>
</template>

<script>

import { LOGIN } from "@/mutations-types.js";

export default {
  name: "login",
  methods: {
    loginAction() {
      this.$store.commit(LOGIN, true);
    }
  }
};
</script>

<style lang="scss" scoped>

.login {
    margin-top: 100px;
    background-color:#4B97E2;
    color: white;
    height: 44px;
    width: 80%;
    margin-left: 10%;
    line-height: 44px;
    border-radius: 10px;
}

</style>

