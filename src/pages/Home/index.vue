<template>
  <div class="HomeTopCtr">
    <div class="Home">
      <Search/>
      <wheel-planting></wheel-planting>
      <Grid/>
      <goodCard/>
      <Tabbar/>
    </div>
  </div>
</template>

<script type="text/javascript">
// import { setCookie } from '@/util/cookie'
import wheelPlanting from './components/wheelPlanting.vue'
import Grid from './components/grid'
import goodCard from './components/goodcard'
import Search from '@/components/search'
import Tabbar from '@/components/tabbar'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {wheelPlanting, Search, Tabbar, Grid, goodCard},
  methods: {
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
