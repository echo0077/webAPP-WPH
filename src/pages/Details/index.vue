<template>
    <div class="detail_box">
        <Title/>
        <Swipeitem/>
        <DetailContent/>
        <DetailCell/>
        <SubmitBar/>
        <DetailBottom/>
    </div>
</template>
<script>
import Title from '@/components/titile.vue'
import Swipeitem from './components/swipe'
import DetailContent from './components/detailContent'
import DetailCell from './components/detailCell'
import SubmitBar from './components/submitBar'
import DetailBottom from './components/detailBottom'
export default {
  components: {Title, Swipeitem, DetailContent, DetailCell, SubmitBar, DetailBottom}
}
</script>
<style scoped>
.detail_box{
    background: #f5f5f5;
}
</style>
