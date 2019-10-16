<template>
  <div class="container">
    <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div v-for="(item,index) in dataList" :key="index">
        <b-video v-if="item.type == 'video'" :infos="item" />
        <duanzi v-else-if="item.type == 'text'" :infos="item"/>
        <pic v-else :infos="item"/>
      </div>
    </pull-refresh>
  </div>
</template>

<script>
import Pic from "@/components/Picture.vue";
import Duanzi from "@/components/Duanzi.vue";
import BVideo from "@/components/BVideo.vue";
import { PullRefresh } from "vant";

export default {
  name: "BaisiAll",
  components: {
    Pic,
    Duanzi,
    BVideo,
    PullRefresh
  },
  data() {
    return {
      dataList: [],
      isLoading: false
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.getDataList();
      }, 500);
    },
    getDataList() {
      var that = this;
      this.$http
        .get("/api/topic/list/jingxuan/1/baisi_xiaohao-iphone-4.1/0-150.json")
        .then(function(resp) {
          that.dataList = resp.data.list;
          that.isLoading = false;
        })
        .finally(function() {});
    }
  }
};
</script>
<style scoped>
.container{
    background-color:#F5f5f5;
}
</style>