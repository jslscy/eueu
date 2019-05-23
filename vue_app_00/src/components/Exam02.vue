<template>
    <div class="myswipe">
      <h1>轮播图</h1>
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
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style scoped>
   .mint-swipe{
       height:660px;
   } 
   .myswipe{
      text-align: center;
   }
</style>