<template>
  <baisi-header :infos="infos">
    <div>
      <div>{{infos.text}}</div>
      <img :src="infos.type=='gif' ? infos.gif.images[0]:infos.image.big[0]" />
    </div>
  </baisi-header>
</template>

<script>
import BaisiHeader from "./BaisiHeader.vue";
export default {
  name: "pic",
  components: {
    BaisiHeader
  },
  props: {
    infos: Object
  }
};
</script>
<style scoped>
img {
    margin-top:10px;
    max-width:100%;
}
</style>