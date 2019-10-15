<template>
  <baisi-header :infos="infos">
    <div>
      <div>{{infos.text}}</div>
      <video
        :src="infos.type=='video' ? infos.video.download[0]:''"
        controls='controls' :poster="infos.video.thumbnail[0]"
      >您的浏览器不支持 video 标签。</video>
    </div>
  </baisi-header>
</template>

<script>
import BaisiHeader from "./BaisiHeader.vue";
export default {
  name: "bvideo",
  components: {
    BaisiHeader
  },
  props: {
    infos: Object
  }
};
</script>
<style scoped>
video {
  margin-top: 10px;
  max-width: 60%;
}
</style>