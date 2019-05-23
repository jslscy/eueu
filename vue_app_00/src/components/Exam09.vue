<template>
  <div class="app-message">
      <input type="button" value="删除" @click="deleteBu">
  </div>
</template>
<script>
import {MessageBox} from "mint-ui"
export default {
  data() {
    return {};
  },
  methods:{
      deleteBu(){
       MessageBox.alert("是否删除").then(action=>{
            console.log("删除用户指定数据")
       })
       .catch(result=>{
           console.log("取消")
       })
      }
  },
  created(){
      MessageBox.prompt("确认执行此操作?").then(action=>{
          console.log("用户选择了确认"+action)
      })
      .catch(result=>{
         console.log("用户选择了取消"+result) 
      })
  }
};
</script>
<style>
</style>