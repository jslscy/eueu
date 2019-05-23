<!---src/components/Exam01.vue---->
<!--1.创建模板-->
<template>
<!---通常一个组件要有一个根标签 div--->
<!---根标签负责包裹所有子元素，背景--->
<!---当前组件根样式--->
    <div class="app-exam01">
        <h1>Exam01 组件</h1>
    </div>
</template>
<!--2.添加script-->
<script>
export default {
    data(){
        return {}
    }
}
</script>
<!--3.添加样式-->
<style scoped>
  .app-exam01{
      background:yellowgreen;
  }  
</style>