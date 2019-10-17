<template>
  <div class="about">
    <h3>特级警告</h3>
    <h4>
      <a href="http://www.baidu.com" @click.prevent="onClick">千万不要点我，后果自负啊</a>
    </h4>
    <div class="card">
      <card :infos="cardInfo" />
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      url: "http://www.devashen.com",
      cardInfo: {
        companyName: "某某科技",
        companyNameEn: "MOUMOU TECH",
        personName: "赵阿申",
        work: "iOS 高级开发",
        address: "浙江杭州滨江阿里附近",
        phone: "159****9304",
        email: "zhaoashen@gmail.com",
        wechat: "ashen-1234",
        signOne: "奋斗就是生活",
        signTwo: "人生只能前进"
      }
    };
  },
  methods: {
    onClick() {
      this.$router.push({
        name: "urlframe",
        query: { src: this.url }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.about {
  margin-top: 10px;
  text-align: center;
  height: 100%;
  h4 {
    margin-top: 10px;
    a {
      color: red;
      font-style:italic;
      text-decoration:underline;
    }
  }
  .card {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
}
</style>
