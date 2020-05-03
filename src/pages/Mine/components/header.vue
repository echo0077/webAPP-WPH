<template>
    <div class="head_title">
        <van-image
        class="head_img"
        round
        width="50px"
        height="50px"
        :src="src"
        />
        <p class="head_text">
            <span @click="login">登录</span> |
            <span @click="login">注册</span>
        </p>
    </div>
</template>
<script>
import img from '@/assets/header.jpg'
export default {
  data () {
    return {
      src: img
    }
  },
  methods: {
    login () {
      this.$router.push('/SignIn')
    }
  }
}
</script>
<style scoped>
.head_title{
    width: 100%;
    height: 90px;
    position: relative;
}
.head_img{
    position: absolute;
    left: 43%;
    top: 20%;
}
.head_text{
    position: absolute;
    bottom: 0px;
    left: 40%;
}
</style>
