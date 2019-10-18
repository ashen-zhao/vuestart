<template>
  <div class="container">
    <pull-refresh v-model="isFreshing" @refresh="onRefresh">
      <list
        v-model="isLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <cell v-for="(item,index) in dataList" :key="index">
          <b-video v-if="item.type == 'video'" :infos="item" />
          <duanzi v-else-if="item.type == 'text'" :infos="item" />
          <pic v-else :infos="item" />
        </cell>
      </list>
    </pull-refresh>
  </div>
</template>

<script>
import Pic from "@/components/Picture.vue";
import Duanzi from "@/components/Duanzi.vue";
import BVideo from "@/components/BVideo.vue";
import { List, Cell, PullRefresh } from "vant";

export default {
  name: "BaisiAll",
  components: {
    Pic,
    Duanzi,
    BVideo,
    PullRefresh,
    List,
    Cell
  },
  data() {
    return {
      dataList: [],
      isFreshing: false,
      isLoading: true,
      finished: false,
      nextpage: "0"
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.nextpage = "0";
        this.finished = false;
        this.isFreshing = true;
        this.getDataList();
      }, 500);
    },
    onLoad() {
      if (!this.isFreshing) {
        this.getDataList();
      }
    },
    getDataList() {
      var that = this;
      this.$http
        .get(
          "/api/topic/list/jingxuan/1/baisi_xiaohao-iphone-4.1/" +
            that.nextpage +
            "-10.json"
        )
        .then(function(resp) {
          if (that.nextpage == "0") {
            that.dataList = [];
          }
          that.dataList.push.apply(that.dataList, resp.data.list);
          that.isLoading = false;
          that.isFreshing = false;
          that.nextpage = resp.data.info.np;
          //模拟数据总量
          if (that.dataList.length >= 100) {
            that.finished = true;
          }
        })
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #f5f5f5;
}
.van-cell {
  margin: 0;
  padding: 0;
}
</style>