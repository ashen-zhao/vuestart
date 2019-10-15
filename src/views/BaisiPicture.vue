<template>
  <div class="container">
    <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div v-for="(item,index) in pictureList" :key="index">
        <pic :infos="item" />
      </div>
    </pull-refresh>
  </div>
</template>

<script>
import Pic from "@/components/Picture.vue";
import { PullRefresh } from "vant";

export default {
  name: "baisi-picture",
  components: {
    Pic,
    PullRefresh
  },
  data() {
    return {
      dataList: [],
      isLoading: false
    };
  },
  computed: {
    pictureList: function() {
      return this.dataList;
    }
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
        .get("/api/topic/list/jingxuan/10/baisi_xiaohao-iphone-4.1/0-20.json")
        .then(function(resp) {
          that.dataList = resp.data.list;
          that.isLoading = false;
        })
        .finally(function() {});
    }
  }
};
</script>
