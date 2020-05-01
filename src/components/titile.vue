<template>
    <div class="shopping">
    <van-nav-bar :title="getTitle">
      <template #left>
        <van-icon name="arrow-left" size="18" color="rgb(254, 64, 112)" @click="toReverse" />
      </template>
      <template #right>
        <van-icon name="wap-home-o" size="18" color="rgb(254, 64, 112)" @click="toHome" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getTitle: ''
    }
  },
  created () {
    let path = this.$route.path
    if (path === '/List') {
      this.getTitle = '分类'
    } else if (path === '/Cart') {
      this.getTitle = '购物车'
    } else if (path === '/Mine') {
      this.getTitle = '个人中心'
    }
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/Home' })
    },
    toReverse () {
      this.$router.go(-1)
    }
  }
}
</script>
<style >
.shopping {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-nav-bar {
    width: 100%;
    height: 50px;
}
.van-nav-bar__left, .van-nav-bar__right{
  bottom: 14px;
}
</style>
