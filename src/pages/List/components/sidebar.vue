<template>
    <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="(item,index) in sidebarList" :key="index" :title="item" />
    </van-sidebar>
</template>
<script>
import { Notify } from 'vant'
export default {
  data () {
    return {
      activeKey: 0,
      sidebarList: [
        '精选推荐',
        '女装',
        '男装',
        '女鞋',
        '男鞋',
        '箱包皮具',
        '手表配饰',
        '护肤彩妆',
        '个人护理'
      ]
    }
  },
  methods: {
    onChange (index) {
      Notify({ type: 'primary', message: index })
    }
  }
}
</script>
