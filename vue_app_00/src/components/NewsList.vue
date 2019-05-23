<template>
  <div class="app-newslist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="'http://127.0.0.1:3000/img/'+item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
                <span>{{item.ctime | datetimeFilter}}</span>
                <span @click="add">点击{{item.point}}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
    <!-- 加载更多的按钮 -->
    <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

        list:[],
        pno:0,
        pageSize:6,
        hasMore:true,
        
    };
  },
  methods:{
   loadMore(){//加载下一页数据
      if(this.hasMore==false){
        this.$toast('已经没有更多的数据......');
        return;
      }
     this.pno++;
     console.log(1234)
     this.axios.get("http://127.0.0.1:3000/newsList?pno="+this.pno).then(result=>{
         var rows=this.list.concat(result.data.data);
         this.list=rows;
     })
   },
   add(){
      
   }
  },
  created(){
   this.loadMore();
  }
};
</script>
<style>
.mui-ellipsis{
    display: flex;
    justify-content:space-between;
    /* font-size:12px; */
    color:#226aff;
}
</style>