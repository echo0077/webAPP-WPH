<template>
    <div>
        <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in gridList" :key="index" @click="goList(item)">
                <van-image :src="item.imgUrl">
                <template v-slot:error>加载失败</template>
                </van-image>
                <span>{{item.text}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import { search } from '@/util/fetch'
export default {
  props: ['gridList'],
  data () {
    return {}
  },
  methods: {
    async goList (item) {
      // console.log(item.text);
      let param = {'name': item.text}
      let data = await search(param)
      if (data.code === 0) {
        let goodList = data.param
        // console.log(data);
        this.$store.goodList = goodList
        this.$router.push({ path: '/List', query: {'goodList': goodList} })
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.van-grid-item__content{
    padding: 16px 1px;
    span{
        // position: absolute;
        // bottom: 10px;
        // color: rgb(254, 64, 112);
        font-size: 14px;
    }
    .van-image__img {
        width: 90%;
        height: 90%;
    }
}
</style>
