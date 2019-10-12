<template>
  <div class="container">
    <div class="header">
      <div class="avator">
        <img :src="infos.u.header[0]" />
      </div>
      <div class="name-passtime">
        <div class="name">{{infos.u.name}}</div>
        <div class="passtime">{{infos.passtime}}</div>
      </div>
    </div>
    <div class="content">{{infos.text}}</div>
  </div>
</template>

<script>
export default {
  name: "duanzi",
  props: {
    infos: Object
  }
};
</script>

<style scoped>
</style>