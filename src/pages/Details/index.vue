<template>
    <div class="detail_box">
        <Title />
        <Swipeitem :imglist = 'imgdata' />
        <DetailContent :textlist = 'textlist'/>
        <DetailCell :celllist = 'textlist'/>
        <SubmitBar :submtlist = 'dataList'/>
        <DetailBottom />
    </div>
</template>
<script>
import Title from '@/components/titile.vue'
import Swipeitem from './components/swipe'
import DetailContent from './components/detailContent'
import DetailCell from './components/detailCell'
import SubmitBar from './components/submitBar'
import DetailBottom from './components/detailBottom'

import {appDatails} from '@/util/fetch'
import { getRouterParams } from '@/util/url.util'

export default {
  components: {Title, Swipeitem, DetailContent, DetailCell, SubmitBar, DetailBottom},
  data() {
      return {
          dataList:{},
          imgdata:[],
          textlist:{}
      }
  },
  async created() {
    let id = getRouterParams('id')
    let param = {'id': id}
    let data = await appDatails(param)
    this.dataList = data.payload
    this.imgdata = this.dataList.sku.tree[0].v
    this.textlist = this.dataList.param
    // console.log(data.payload);
    
  },
}
</script>
<style scoped>
.detail_box{
    background: #f5f5f5;
}
</style>
