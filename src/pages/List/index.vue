<template>
    <div>
      <Title/>
        <van-grid :column-num="2">
            <van-grid-item v-for="(item,index) in gridList" :key="index" @click="onDatails(item)">
                <van-image :src="item.img">
                <template v-slot:error>加载失败</template>
                </van-image>
                <p class="title">
                <span style="float: left;font-size: 14px;">{{item.p_title}}</span>
                <span style="float: right;font-size: 14px;color: red;" v-text="'￥'+ item.vip_price"></span>
                </p>
            </van-grid-item>
        </van-grid>
        <Tabbar/>
    </div>
</template>
<script>
import Title from '@/components/titile.vue'
import Tabbar from '@/components/tabbar'
// import { appDatails } from '@/util/fetch'

export default {
  components: {Title, Tabbar},
  data () {
    return {
      gridList: []
    }
  },
  methods: {
    async onDatails (item) {
      let id = item.product_id
      this.$router.push({path: `/Details?id=${id}`})
    }
  },
  created () {
    if (this.$store.goodList === undefined) {
      this.gridList = this.$route.query.goodList
    } else {
      this.gridList = this.$store.goodList
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.title{
    text-align: left;
    width: 90%;
    margin-top:5px;
}
.menu_box{
  height: 35px;
}
</style>
