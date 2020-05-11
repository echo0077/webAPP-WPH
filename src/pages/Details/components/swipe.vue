<template>
  <van-swipe @change="onChange">
    <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
    </van-swipe-item>
    <template #indicator>
        <div class="custom-indicator">
        {{ current + 1 }}/4
        </div>
    </template>
  </van-swipe>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      images: [
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/830365541-1037030678738952318-1037030678738960509-1_720x909_70.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/6633470-1037030678738952318-1037030678738960509-2_720x909_70.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1214760341-1037030678738952318-1037030678738960509-4_720x909_70.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1663362234-1037030678738952318-1037030678738960509-3_720x909_70.jpg!85.webp'
      ]
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    }
  }
}
</script>
<style scoped lang="less">
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .van-swipe{
      img{
          width: 100%;
          height: 330px;
      }
  }
</style>
