<template>
  <div class="container">
      <pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div v-for="(item,index) in duanziList" :key="index">
              <duanzi :infos="item"/>
          </div>
      </pull-refresh>
  </div>
</template>

<script>
import Duanzi from "@/components/Duanzi.vue";
import { PullRefresh } from "vant";
import {mapState} from 'vuex'
import { DUANZI } from "@/mutations-types.js";

export default {
  name: "baisi-duanzi",
  components: {
    Duanzi,
    PullRefresh
  },
  data(){
      return{
          isLoading:false
      }
  },
  created(){
      this.getDuanziList()
  },
  computed:{
      ...mapState({
          duanziList:'duanziList'
      })
  },
  methods:{
      onRefresh(){
          setTimeout(() => {
              this.getDuanziList()
          }, 500);
      },
      getDuanziList(){
          var that = this
          this.$http.get('/api/topic/list/jingxuan/29/baisi_xiaohao-iphone-4.1/0-20.json').then(function(resp){
              that.$store.commit(DUANZI, resp.data.list);
              that.isLoading = false
          }).finally(function(){

          })

      }
  }
};
</script>

<style scoped>
.container{
    background-color:#F5f5f5;
}
</style>