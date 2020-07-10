<template>
  <div id="app">
    <div class="box">
      <router-view />
    </div>
  </div>
</template>

<script>
import {local} from '@/util/storage.util'
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
      local('token', token)
    }
    this.token = token
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    })
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
