<template>
  <pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="about">
      <h2>哈哈哈哈</h2>
      <h3>
        <a href="http://www.devashen.com">http://www.devashen.com</a>
      </h3>
    </div>
  </pull-refresh>
</template>

<script>
import { PullRefresh } from "vant";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    PullRefresh
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.about {
  text-align: left;
  margin-left: 30px;
  height: 100%;
}

</style>
