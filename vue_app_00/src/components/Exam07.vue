<template>
    <div class="app-exam07">
        <h1>/Exam07 22</h1>
        <h1>元素与处理函数之间数据传递方式一</h1>
        <div @click="handle1(10,18)">联想笔记本</div>
        <div @click="handle2" data-pid="15">联想笔记本1</div>
        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						书法、绘画
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(img/banner1.png)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
		</div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        handle1(pid,num){
            console.log(pid,num )
        },
        handle2(e){
            console.log(e.target.dataset.pid)
        }
    }
}
</script>
<style>
    
</style>
