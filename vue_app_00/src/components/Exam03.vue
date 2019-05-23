<template>
  <div class="swiper">
    <el-carousel indicator-position="none" arrow="always" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in swiperlist" :key="index">
        <img :src="item.bannerUrl" ref="image" @load="imageLoaded">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:0,
     bannerHeight:"",
      swiperlist:[
        {id:1,bannerUrl:"img/banner1.png"},
        {id:2,bannerUrl:"img/banner2.png"},
        {id:3,bannerUrl:"img/banner3.png"},
        {id:4,bannerUrl:"img/banner4.png"},
      ]
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.image[0].offsetHeight;
      },
      false
    );
  },
  methods: {
    imageLoaded(){
      this.count++;
      if(this.count===1){
        this.$nextTick(()=>{
          this.bannerHeight = this.$refs.image[0].offsetHeight;
        })
      }
    }
  },
};
</script>
 
 
<style>
.el-carousel__container {
  height: 100% !important;
}

img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>
 
