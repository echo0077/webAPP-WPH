<template>
  <div>
    <van-image :src="src">
      <template v-slot:error>加载失败</template>
    </van-image>
    <span class="Close" @click="close()">X</span>
    <van-form>
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
        <van-button round block type="info" native-type="submit" @click="goLogin">
          登录
        </van-button>
      </div>
       <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="goRegs">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import img from '@/assets/timg.jpg'
import {appRegs, appLogin} from '@/util/fetch'
import md5 from '@/util/md5'
import {setCookie} from '../../util/cookie'
import { Toast, Dialog } from 'vant'

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
    async goLogin () {
      if (this.username && this.password) {
        let params = {
          name: this.username,
          pass: md5(this.password)
        }
        let data = await appLogin(params)
        if (data.code === 0) {
          setCookie('token', data.token)
          setCookie('userId', data.userId)
          Dialog.alert({
            message: '登陆成功'
          }).then(() => {
            this.$router.push('/Mine')
            this.username = ''
            this.password = ''
          })
        } else {
          Toast.fail(data.msg)
        }
      }
    },
    async goRegs () {
      if (this.username && this.password) {
        let params = {
          name: this.username,
          pass: md5(this.password)
        }
        let data = await appRegs(params)
        // console.log(data)
        if (data.code === 0) {
          Toast.success('注册成功，请登录！')
          this.username = ''
          this.password = ''
        } else if (data.code === 100) {
          Dialog.alert({
            message: '账号已存在!'
          })
        }
      }
    },
    close () {
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
