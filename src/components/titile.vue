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
    switch (path) {
      case '/List':
        this.getTitle = '分类'
        break
      case '/Cart':
        this.getTitle = '购物车'
        break
      case '/Mine':
        this.getTitle = '个人中心'
        break
      case '/Collection':
        this.getTitle = '我的收藏'
        break
      case '/Contacts':
        this.getTitle = '联系人'
        break
      case '/Order':
        this.getTitle = '订单'
        break
      case '/Location':
        this.getTitle = '我的地址'
        break
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
</style>
