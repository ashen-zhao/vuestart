<template>
  <div class="container">
    <pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="list" v-for="(card,index) in cardList" :key="index">
        <card :infos="card" />
      </div>
    </pull-refresh>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
import { CARD_LIST } from "@/mutations-types.js";
import { PullRefresh } from "vant";
export default {
  name: "personInfo",
  components: {
    Card,
    PullRefresh
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.onRefresh();
  },
  computed: {
    ...mapState({
      cardList: "cardList"
    })
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        var card = {
          companyName: "某某科技",
          companyNameEn: "MOUMOU TECH",
          personName: "张三",
          work: "java高级开发",
          address: "浙江杭州滨江阿里附近",
          phone: "159****9304",
          email: "zhangsan@mmtech.com",
          wechat: "zhangsan1234",
          signOne: "会当凌绝顶",
          signTwo: "一览众山小"
        };
        this.$store.commit(CARD_LIST, card);
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
.container {
  margin-bottom: 10px;
  overflow: hidden;
}
.list {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
</style>
