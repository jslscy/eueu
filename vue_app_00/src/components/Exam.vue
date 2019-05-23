<template>
 	<div>
		<ul>
			<li  v-for="(item,index) in list" @click="addClass(item,index)" :class="{'color':index==current}" :key="index">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:"myul",
		data(){
			return{
				current:0,
				list:[
					{name:"zhangsan",age:14},	
					{name:"zhangsan",age:14},	
					{name:"zhangsan",age:14},	
					{name:"zhangsan",age:14},	
				]	
			}
		},
		methods:{
			addClass(item,index){
				//item,进行相关操作
				this.current = index
			}
		}
		
	}
</script>
<style scope>
.color{color:#fff}
</style>
