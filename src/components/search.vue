<template>
  <div class="van-search">
    <input type="text" v-model="value" placeholder="请输入搜索内容" class="search_inp">
    <van-button round  color="rgba(255,0,0,0)" size="small" @click="onSearch">搜索</van-button>
  </div>
</template>
<script>
import { liulaobanzhuanshuSearch } from '@/util/fetch'
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    async onSearch(){
    if (this.value) {
      let param = {'name':this.value}
      let data = await liulaobanzhuanshuSearch(param)
      if (data.code === 0) {
        let goodList = data.param
        this.$store.goodList = goodList
        this.$router.push({ path: '/List', query:{'goodList':goodList} })
      }
      console.log(this.$store.goodList)
    }
    
    }
  },
}
</script>
<style scoped>
    .van-search{
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        background: rgb(254, 64, 112);
    }
    .search_inp{
      width: 90%;
      height: 30px;
      border-radius: 15px;
      padding-left: 15px;
      border: none;
      margin-right: 5px;
      margin-left: 5px;
    }
</style>
