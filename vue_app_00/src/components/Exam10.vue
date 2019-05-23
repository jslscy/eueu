<template>
  <div class="shop-cart">
    <div class="cart-header fixedClear">
      <div class="cart-checkbox">
        <input type="checkbox">全选
      </div>
      <div class="cart-goods">商品</div>
      <div class="cart-price">单价</div>
      <div class="cart-quantity">数量</div>
      <div class="cart-sum">小计</div>
      <div class="cart-action">操作</div>
    </div>
    <div v-for="(item,index) of list" :key="index" class="cart-body">
        <div class="cart-checkbox">
            <input type="checkbox">                                                <img src="img/menu1.png">
        </div>
        <div  class="cart-goods">{{item.lname}}</div>
        <div  class="cart-goods">{{item.price}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      var url = "http://127.0.0.1:3000/getCart";
      this.axios.get(url).then(result => {
        //为数组元素添加属性cb
        //cb标识复选框的状态
        this.list = result.data.data;
        //创建循环遍历数组并且添加属性
      });
    }
  }
};
</script>
<style>
.shop-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.cart-body{
   width:80%;
   margin-top: 2em;
   vertical-align: middle;  
  
}

.cart-header{
    width:80%;
    height:3rem;
    background: #ddd;
    color:#666;
    line-height:3rem;
  
}
.cart-header>div{
   float:left;
}
.fixedClear{
    display:block;
    content: "";
    clear:both;
}
.cart-checkbox{
    margin-left:2em;  
}
.cart-checkbox>img{
    vertical-align: middle;
    width:6em;
    height:6em;
}
.cart-header>div:nth-child(n+4){
    margin-left: 6em;
}
.cart-goods{
    margin-left:8em; 
}
.cart-price{
   margin-left:25em; 
}
</style>