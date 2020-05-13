<template>
  <div class="HomeTopCtr">
    <div class="Home">
       <Search/>
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
       <wheel-planting></wheel-planting>
       <Grid/>
       <goodCard/>
      </van-pull-refresh>
      <Tabbar/>
    </div>
  </div>
</template>

<script type="text/javascript">

import wheelPlanting from './components/wheelPlanting.vue'
import Grid from './components/grid'
import goodCard from './components/goodcard'
import Search from '@/components/search'
import Tabbar from '@/components/tabbar'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  components: {wheelPlanting, Search, Tabbar, Grid, goodCard},
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
