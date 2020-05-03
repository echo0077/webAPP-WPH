<template>
    <div >
      <Title/>
      <AddressList v-if="addressShow == false && addressHide"/>
      <AddressEdit v-else @addList = 'addList'/>
    </div>
</template>
<script>
import Title from '@/components/titile'
import AddressList from './components/addressList'
import AddressEdit from './components/addressEdit'
export default {
  components: {
    Title,
    AddressList,
    AddressEdit
  },
  data () {
    return {
      addressShow: false,
      addressHide: false
    }
  },
  created () {
    this.addList()
  },
  methods: {
    addList (val) {
      this.addressHide = val
    }
  }
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
