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
import { findMenuByUserId } from '@/util/fetch'
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
    // this.getwhiteListAdd()
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
      // let permission = await findMenuByUserId({ userId: token })
      // let str = []
      // if (permission.success) {
      //   permission.rows.forEach(i => {
      //     str.push(i.component)
      //   })
      // }
      // let depArr = str.filter(i => i === 'DeptDataPermission' || i === 'AllDataPermission')
      // let isHave = str.some(val => val === this.$route.name)
      // this.$store.commit('isDepPermission', depArr)
      // if (!isHave && this.$route.name !== 'ShoppingCartOrderDetail') this.$router.push({ path: 'Error' })
      // else this.$router.push({ name: this.$route.name })
      this.isloadding = false
    }
    // // 权限验证
    // async getwhiteListAdd () {
    //   this.isloadding = true
    //   try {
    //     await whiteListAdd({})
    //     this.isloadding = false
    //   } catch (e) {
    //     this.isloadding = false
    //     this.$router.push({ path: 'Error' })
    //   }
    // }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
