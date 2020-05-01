<template>
    <van-search
    v-model="value"
    shape="round"
    background="rgb(254, 64, 112)"
    placeholder="请输入搜索关键词"
    />
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style scoped>
    .van-search{
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
    }
</style>
