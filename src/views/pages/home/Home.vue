<template>
  <div id="home">
    <div class="list" v-for="(info,index) in infos" :key="index">
      <Card :infos="info" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Card
  },
  created() {
    this.loadData();
  },
  data() {
    return {
      infos: []
    };
  },
  methods: {
    loadData: function() {
      this.infos = [
        {
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
        }
      ];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.list {
  display: flex;
  justify-content: center;
  background-color: #969696;
  padding-bottom: 30px;
}
</style>
