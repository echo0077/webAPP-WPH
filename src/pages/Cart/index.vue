<template>
<div>
    <Title/>
    <GoodCard/>
    <Tabbar/>
</div>
</template>
<script>
import Title from '@/components/titile.vue'
import GoodCard from './goodCard'
import Tabbar from '@/components/tabbar'
export default {
  components: {Title, Tabbar, GoodCard}
}
</script>
