<template>
<div>
    <Title/>
    <Header :token='token'/>
    <Bottom/>
    <Tabbar/>
</div>
</template>
<script>
import Title from '@/components/titile.vue'
import Tabbar from '@/components/tabbar'
import Header from './components/header'
import Bottom from './components/bottom'
import {getCookie} from '@/util/cookie'

export default {
  components: {Title, Tabbar, Header, Bottom},
  data () {
    return {
      token: ''
    }
  },
  methods: {
    changetoken (val) {
      this.token = val
    }
  },
  created () {
    this.token = getCookie('token')
  }
}
</script>
