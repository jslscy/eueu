<template>
  <div class="mui-content">
      <mt-header fixed title="顶部"></mt-header>
    <div class="myswipe">
      <mt-swipe :auto=4000 :show-indicators='false'>
       <mt-swipe-item>
         <img src="img/adv_by.jpg" >  
       </mt-swipe-item>
       <mt-swipe-item>
         <img src="img/linbotu3.png" >    
       </mt-swipe-item>
       <mt-swipe-item>
         <img src="img/linbotu5.png" >    
       </mt-swipe-item>     
      </mt-swipe>  
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
         <img src="img/menu1.png" @click="jump" >
          <div class="mui-media-body">商品详情</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <!-- <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span> -->
          <img src="img/menu2.png" @click="jump2">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
         <img src="img/menu3.png" >
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/exam06?pid=5">
          <img src="img/menu4.png" >
          <div class="mui-media-body">参数传递1</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="img/menu5.png" @click="jump3">
          <div class="mui-media-body">参数传递2</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="img/menu1.png" >
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/exam">
          <img src="img/menu2.png" >
          <div class="mui-media-body">登录</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span @click="jump4" class="mui-icon mui-icon-contact"></span>
          <div class="mui-media-body">about</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
         <img src="img/menu4.png" >
          <div class="mui-media-body">more</div>
        </a>
      </li>
    </ul>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">6</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
		</nav>
  </div>
</template>
<script src="../../mui-master/examples/login/js/mui.min.js"></script>
<script>
export default {
  data() {
    return { };
  },
  methods:{
    jump(){
      this.$router.push("/GoodList")
  },
  jump2(){
    this.$router.push("/login")
  },
  jump3(){
    this.$router.push("/exam06?pid=6")
  },
  jump4(){
    this.$router.push("/exam06?pid=9")
  }
  }
};
</script>
<style >
   .mui-table-view-cell>a>img{
       width:60px;
  
   }
    .myswipe{
       height:300px;
   } 
 
</style>