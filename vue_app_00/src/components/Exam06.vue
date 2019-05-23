<template>
    <div>
        <h1>Exam06接收参数</h1>
        <mt-button size="large" type="primary" @click="jump">商品列表</mt-button>
    </div>
</template>
<script>
export default {
    props:["lid"],
    data(){
        return { }
    },
     methods:{
        jump(){
            this.$router.push("/GoodList?lid=19")
        }
    },
    created(){
        var pid=this.$route.query.pid;
        console.log(pid)
        
    },
   
}
</script>
<style >
    
</style>