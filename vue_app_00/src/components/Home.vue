<template>
  <div class="carousel clearFixed" >
    <ul :style="carousel_style">
      <li><img src="http://127.0.0.1:3000/img/banner4.png"></li>
      <li><img src="http://127.0.0.1:3000/img/banner1.png"></li>
      <li><img src="http://127.0.0.1:3000/img/banner2.png"></li>
      <li><img src="http://127.0.0.1:3000/img/banner3.png"></li>
      <li><img src="http://127.0.0.1:3000/img/banner4.png"></li>
      <li><img src="http://127.0.0.1:3000/img/banner1.png"></li>
    </ul>
    <div class="bots" >
      <span :style="{'background-color':i==1?'lightgrey':'gray'}"></span>
      <span :style="{'background-color':i==2?'lightgrey':'gray'}"></span>
      <span :style="{'background-color':i==3?'lightgrey':'gray'}"></span>
      <span :style="{'background-color':i==4||0?'lightgrey':'gray'}"></span>
    </div>
  </div>
</template>
<script>
export default {
  name:"carousel1",
  data(){
    return {
      i:1,
      carousel_style:{
        marginLeft:"-100%",
        transition:"1s"
      },
      interval:null,
    }
  },
  methods: {
    carouselAuto(liSize){
      this.interval=setInterval(()=>{
        if(this.i<liSize-1){
          this.i++;
          this.carousel_style.marginLeft=(this.i*(-100))+"%"
        }else{
          this.i++;
          this.carousel_style.marginLeft=(this.i*(-100))+"%";
          setTimeout(()=>{
            this.i=0 
            this.carousel_style.marginLeft="0%";
            this.carousel_style.transition="0s";
          },1000)
        }
        this.carousel_style.transition="1s"
      },3000)
    }
  },
  mounted(){
    this.carouselAuto(4)
  }
}
</script>
<style>
.app-container{
   width:100%;
}
.carousel{
  width:100%;
  position: relative;
}
  .carousel>ul{
    list-style-type:none;
    width:600%;
    overflow: hidden;
    margin: 0;
    padding:0;
  }
  .carousel>ul>li{
    width:16.666667%;
    float:left;
  }
 .carousel>ul>li>img{
   width:100%;
 } 
 .clearFixed:after{
   display:block;
   content: "";
   clear:both;
 }
 .bots{
   position: absolute;
   z-index: 1;
   left: 45%;
   bottom:20px;
   transform:translateX(-50%);
 }
 .bots>span{
   display: inline-block;
  cursor: pointer;
  margin-right: 10px;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: #fff;
 }
</style>
