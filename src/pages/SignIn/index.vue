<template>
  <div>
    <van-image :src="src">
      <template v-slot:error>加载失败</template>
    </van-image>
    <span class="Close" @click="close()">X</span>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写用户名' },{ pattern, message: '请输入正确的手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
       <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import img from '../../assets/timg.jpg'
export default {
  name: 'SignIn',
  data () {
    return {
      src: img,
      username: '',
      password: '',
      pattern: /^1[3456789]\d{9}$/
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    close () {
      // this.$router.push({
      //   name: 'Mine'
      // })
      this.$router.push('/Mine')
    }
  }
}
</script>
<style lang="less" scoped>
.Close{
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
