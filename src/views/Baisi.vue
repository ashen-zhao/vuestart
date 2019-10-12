<template>
  <div class="container">
      <pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div v-for="(item,index) in dataList" :key="index">
              <duanzi :infos="item"/>
          </div>
      </pull-refresh>
  </div>
</template>

<script>
import Duanzi from "@/components/Duanzi.vue";
import { PullRefresh } from "vant";

export default {
  name: "baisi",
  components: {
    Duanzi,
    PullRefresh
  },
  data(){
      return{
          isLoading:false,
          dataList:[]
      }
  },
  created(){
      this.getDuanziList()
  },
  methods:{
      onRefresh(){
          setTimeout(() => {
              this.isLoading = false
          }, 500);
      },
      getDuanziList(){
          this.$http.get('/topic/list/jingxuan/29/baisi_xiaohao-iphone-4.1/0-20.json').then(function(resp){
              console.log(resp.data.list)
          }).finally(function(){

          })

      }
  }
};
</script>

<style scoped>
</style>