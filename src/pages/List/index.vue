<template>
<div>
    <Title/>
    <Sidebar/>
    <Tabbar/>
</div>
</template>
<script>
import Title from '@/components/titile.vue'
import Tabbar from '@/components/tabbar'
import Sidebar from './components/sidebar'
export default {
   components: {Title,Tabbar,Sidebar}, 
}
</script>