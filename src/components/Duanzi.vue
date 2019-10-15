<template>
  <baisi-header :infos="infos">
    <div>{{infos.text}}</div>
  </baisi-header>
</template>

<script>
import BaisiHeader from "./BaisiHeader.vue";
export default {
  name: "duanzi",
  components: {
    BaisiHeader
  },
  props: {
    infos: Object
  }
};
</script>