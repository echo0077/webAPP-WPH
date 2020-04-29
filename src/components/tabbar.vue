<template>
  <div>
    <router-view />
    <van-tabbar route v-model="active" active-color="rgb(254, 64, 112)" inactive-color="#000">
          <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/List" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/Cart" icon="shopping-cart-o">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/Mine" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
    return {
      active: 0,
    };
  },
  methods: {
  },
}
</script>
<style scoped>
.van-tabbar{
  height: 70px;
}
</style>