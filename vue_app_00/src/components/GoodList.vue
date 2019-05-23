<!--src/components/home/GoodList.vue-->
<template>
  <div class="app-goodlist">
    <!--1:商品列表 二行二列-->
    <div class="goods-item" v-for="item of list" :key="item.i">
      <!--1.1图片-->
      <img src="http://127.0.0.1:3000/indeximg12.jpg">
      <!--1.2商品名称-->
      <h4>{{item.lname}}</h4>
      <!--1.3商品价格-->
      <h4 class="now">{{item.price}}</h4>
    </div>
    <!--2:添加按钮 mint-ui Button-->
    <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  props:["lid"],
  data() {
    return {
      pno:1,
      hasMore:true,
      list:[] //接收服务器返回商品数组
    }
  },
  created() {
    console.log(this.$router.query.lid)
    //当组件创建成功后，请求第一页数据
    //1:创建变量保存请求地址 url
    var url = "http://127.0.0.1:3000";
    url += "/getGoodList";
    //2:发送ajax请求 无参数
    this.axios.get(url).then(result => {
      //3:接收返回商品数组
      this.list = result.data.data;
      //第一页数据
      //4:保存list
      //console.log(this.list);
    });
  },
  methods: {
    loadMore() {
      if(this.hasMore==false){
        this.$toast('已经没有更多的数据......');
        return;
      }
      //加载下一页数据
      this.pno++;
      //1:创建url请求地址
      var url = "http://127.0.0.1:3000/";
      url += "getGoodList";
      //2:添加参数pno=2
      url += "?pno="+this.pno;
      //3:发送ajax请求
      //4:获取服务器数据
      //5:将返回数据保存 list
      this.axios.get(url).then(result => {
        // this.list = result.data.data;
        // 练习1:第一页,第二页原先覆盖  17:56
        //       第二页追加第一页后面
        //       concat()
        // 练习2:加载功能loadMore 1 2 3 4
        var rows = this.list.concat(result.data.data);
        this.list = rows;
         if(this.pno >= result.data.pageCount){
          this.hasMore=false
        }
      });
    }
  }
};
</script>
<style>
/*外层父元素*/
.app-goodlist {
  display: flex; /*弹性布局*/
  flex-wrap: wrap; /*子元素换行*/
  justify-content: space-between; /*两端对齐*/
  padding: 4px;
}
/*商品信息*/
.app-goodlist .goods-item {
  width: 49%; /*商品元素宽度*/
  border: 1px solid #ccc; /*边框*/
  margin: 2px 0; /*外补丁*/
  padding: 2px; /*内补丁*/
  display: flex; /*弹性布局*/
  flex-direction: column; /*排列方式:按列*/
  min-height: 245px; /*最小高度*/
}
/*商品图片*/
.app-goodlist .goods-item img {
  width: 100%;
}
</style>
