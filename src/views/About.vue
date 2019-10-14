<template>
  <div class="about">
    <h3>特级警告</h3>
    <h4>
      <a href="http://www.devashen.com" @click.prevent="onClick">千万不要点击，后果自负啊</a>
    </h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://www.devashen.com"
    };
  },
  methods: {
    onClick() {
      this.$router.push({
        name:'urlframe',
        query:{src:this.url}
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.about {
  text-align: center;
  height: 100%;
  h4 {
    margin-top: 30px;
    a {
      color: red;
    }
  }
}
</style>
