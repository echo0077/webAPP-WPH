<template>
  <div class="wheelPlanting">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
      <img style="width:100%;height:200px;"  :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'wheelPlanting',
  data () {
    return {
      images: [
        'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/04/28/178/15880665936626.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/04/29/120/15881289279348.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/04/29/15/15881409300317.jpg!85.webp'
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
</style>
<style lang="less">
  .wheelPlanting{
    margin-top: 52px;
  }
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
  .van-swipe{
    transform: translateZ(0);
  }
</style>
