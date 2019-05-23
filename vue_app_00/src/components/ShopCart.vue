<template>
  <div class="app-shop">
    <h1>购物车</h1>
    <div class="mui-card">
      <div class="mui-card-header">
        <input type="checkbox" @click="selectAll" :checked="allcb">
        全选
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <ul class="mui-table-view">
            <li v-for="(item,i) of list" :key="i" class="mui-table-view-cell mui-media">
              <input type="checkbox" :checked="item.cb" @change="modifyItem" :data-i="i">
              <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="img/menu1.png">
                <div class="mui-media-body">
                  <p class="mui-ellipsis">
                    <!-- 1.复选框-->
                    <!-- 2.商品名称 -->
                    {{item.lname}}
                    <!-- 3.商品价格 -->
                    {{item.price}}
                    <!-- 4.删除按钮  -->
                    <input type="button" value="删除" @click="delectCart" :data-id="item.id">  
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mui-card-footer">
        <input type="button" value="删除选中的商品" @click="removeSelect">
        <input type="button" value="结算" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      allcb:false,
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    modifyItem(e){
      //功能：如果用户选中商品，将当前商品对应对象 cb=true
      //功能：如果用户未选中商品，将当前商品对应对象 cb=false
      //1.获取当前元素选中状态
      var cb=e.target.checked;
      //2.获取当前元素对应商品对象
      //获得当前元素的下标
      var i=e.target.dataset.i
      console.log(cb)
      console.log(i)
      //3.修改商品对象的cb属性值
      this.list[i].cb=cb;
      //4.修改全选状态 true false
      //4.1如果完成 累加计算 
      var count=0;

      // 4.2创建变量count保存累加和
      // 4.3创建循环遍历所有元素
      for(var item of this.list){
        if(item.cb){
          count++;
        }
      }
      // 4.4获取cb如果值等于true count++
      // 4.5如果count个数与数组长度一致
      if(count==this.list.length){
        this.allcb=true;
      }else{
         this.allcb=false; 
      }
      // 4.6将全选复选框选中
      // 4.7否则清空全选复选框
     
    },
    removeSelect() {
      // 1.显示确认框
      this.$messagebox
        .confirm("是否删除选中商品")
        .then(action => {
          //获取用户选中的商品
          //创建变量保存删除商品的id
          var ids="";
          //创建循环遍历数组，如果当前元素cb:true
          for(var item of this.list){
            if(item.cb){
              ids += item.id+",";
            }
          }
          //如果用户没有选中商品，停止删除操作
          if(ids.length==0){
           this.$toast("快选")
           return;
         }
          //如果用户选中多个商品1,2,3,去除后面
          ids=ids.substring(0,ids.length-1);
          //substring(?,?)截取字符串  起始位置 截取长度
          //获取当前元素id拼接字符串
          var url = "http://127.0.0.1:3000/delM?ids=" + ids;
          this.axios.get(url).then(result => {
            this.$toast(result.data.msg)
            this.loadMore();
          });
        })
        .catch(result =>{});
    },
    selectAll(e){
      var cb=e.target.checked;
      this.allcb=cb;
      for(var item of this.list){
        item.cb=cb;
      }
    },
    delectCart(e) {
      //创建确认的消息框
      this.$messagebox
        .confirm("是否删除")
        .then(action => {
          var id = e.target.dataset.id;
          var url = "http://127.0.0.1:3000/removeCartItem?id=" + id;
          this.axios.get(url).then(result => {
            if (result.data.code == 1) {
              this.$toast("删除成功");
              this.loadMore();
            } else {
              this.$toast("删除失败");
            }
          });
        })
        .catch(result => {
          this.$toast("取消删除");
        });
    },
    loadMore() {
              
      var url = "http://127.0.0.1:3000/getCart";
      this.axios.get(url).then(result => {
        if(result.data.code<1){
          this.$toast("快登");
          setTimeout(()=>{
            this.$router.push("/login");
          },3000)
          
          return;
        }
        //为数组元素添加属性cb
        //cb标识复选框的状态
        var rows = result.data.data;
        //创建循环遍历数组并且添加属性
        for (var item of rows) {
          item.cb = false;
        }
        //将添加结果后的数组赋值list
        this.list = rows;
      });
    }
  }
};
</script>
<style>

</style>