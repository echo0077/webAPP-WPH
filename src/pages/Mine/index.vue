<template>
<div>
    <Title/>
    <Header/>
    <Bottom/>
    <Tabbar/>
</div>
</template>
<script>
import Title from '@/components/titile.vue'
import Tabbar from '@/components/tabbar'
import Header from './components/header'
import Bottom from './components/bottom'
export default {
  components: {Title, Tabbar, Header, Bottom}
}
</script>
