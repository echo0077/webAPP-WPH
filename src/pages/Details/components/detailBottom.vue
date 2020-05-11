<template>
    <div class="img_box">
        <img class="img" v-for="(img,index) in imageList" :key="index" v-lazy="img" />
    </div>
</template>
<script>
export default {
    data() {
    return {
      imageList: [
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1598201753-1037030678738952318-602.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1822231293-1037030678738952318-603.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/2023839717-1037030678738952318-604.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/2099635250-1037030678738952318-605.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/970781978-1037030678738952318-606.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1464414816-1037030678738952318-607.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/137415860-1037030678738952318-608.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/676064320-1037030678738952318-609.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1519418585-1037030678738952318-610.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1739879705-1037030678738952318-611.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/1739879705-1037030678738952318-611.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/561778573-1037030678738952318-612.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/561778573-1037030678738952318-612.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/133847439-1037030678738952318-615.jpg!85.webp',
        'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00101577/10001211/498497507-1037030678738952318-637.jpg!85.webp',
      ],
    };
  },
}
</script>
<style scoped>
.img_box{
    margin-bottom: 20px;
}
.img{
    width: 100%;
}
</style>