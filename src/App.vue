<template>
  <div id="app">
    <div v-show="isloadding"
         class="box">
    </div>
    <div v-show="!isloadding"
         class="box">
      <router-view />
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from '@/util/cookie'
export default {
  name: 'App',
  data () {
    return {
      token: '',
      isloadding: true
    }
  },
  created () {
    let token = this.$route.query.token
    if (token) {
      this.$store.state.token = token
      setCookie('token', token)
    }
    this.token = token
    this.isloadding = true
    this.getFindMenu(token || getCookie('token'))
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    })
  },
  methods: {
    async getFindMenu (token) {
      this.isloadding = false
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
