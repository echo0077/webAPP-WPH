<template>
  <div class="wheelPlanting">
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
    <img  style="width:100%;height:200px;" v-lazy="image" />
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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
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
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
</style>
