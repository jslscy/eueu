<template>
    <div>
    <mt-header title="标题过长会隐藏后面的内容" class="hyeu"></mt-header>
    <p v-for="(p,i) of list" :key="i">{{p.id}}--{{p.name}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    };
  }
};
</script>
<style scoped>
.swiper {
  height: 300px;
}

.bk1 {
  background: red;
  
}
.bk2 {
  background: goldenrod;
}
.bk3 {
  background: peru;
}
</style>
var c=1;
function d(){
  console.log(c)
  var c=3;
}
d()
var name="the window"
var obj={
  name:"my obj",
  getName:function(){
  
      return this.name;
  
  }
}
console.log(obj.getName())