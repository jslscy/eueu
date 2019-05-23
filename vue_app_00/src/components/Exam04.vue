<template>
  <div>
    <h1>MUI 钻艰苦按钮</h1>
    <div class="mui-content">
      <div class="mui-content-padded">
        <h5>有底色按钮：</h5>
        <button type="button" class="mui-btn">默认</button>
        <div class="mui-btn mui-btn-primary">蓝色</div>
        <span class="mui-btn mui-btn-success">绿色</span>
        <button type="button" class="mui-btn mui-btn-warning">黄色</button>
        <button type="button" class="mui-btn mui-btn-danger">红色</button>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button>
        <h5 style="margin-top: 10px;">无底色按钮（使用父元素的背景色）：</h5>
        <button type="button" class="mui-btn mui-btn-outlined">默认</button>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">操作</button>
        <button type="button" class="mui-btn mui-btn-success mui-btn-outlined">成功</button>
        <button type="button" class="mui-btn mui-btn-warning mui-btn-outlined">警告</button>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">危险</button>
        <button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">高贵</button>
        <h5 style="margin-top: 15px;">链接按钮：</h5>
        <button type="button" class="mui-btn mui-btn-link">添加</button>
        <h5 style="margin-top: 10px;">默认input标签样式：</h5>
        <input type="button" value="type=button">
        <input type="reset" value="type=reset">
        <input type="submit" value="type=submit">
        <h5 style="margin-top: 10px;">默认button标签样式：</h5>
        <button type="button">按钮</button>
      </div>
    </div>
    <div class="mui-content">
			<div class="mui-content-padded">
				<p style="text-align: center;">点击图标查看高亮样式</p>
				<div class="flex-container">
					<a id="icon-icon-contact"><span class="mui-icon mui-icon-contact"></span></a>
					<a id="icon-person"><span class="mui-icon mui-icon-person"></span></a>
					<a id="icon-personadd"><span class="mui-icon mui-icon-personadd"></span></a>
					<a id="icon-phone"><span class="mui-icon mui-icon-phone"></span></a>
					<a id="icon-email"><span class="mui-icon mui-icon-email"></span></a>
					<a id="icon-chatbubble"><span class="mui-icon mui-icon-chatbubble"></span></a>
					<a id="icon-chatboxes"><span class="mui-icon mui-icon-chatboxes"></span></a>
					<a><span class="mui-icon mui-icon-weibo"></span></a>
					<a><span class="mui-icon mui-icon-weixin"></span></a>
					<a><span class="mui-icon mui-icon-pengyouquan"></span></a>
					<a><span class="mui-icon mui-icon-chat"></span></a>
					<a><span class="mui-icon mui-icon-qq"></span></a>

					<a><span class="mui-icon mui-icon-videocam"></span></a>
					<a><span class="mui-icon mui-icon-camera"></span></a>
					<a><span class="mui-icon mui-icon-image"></span></a>
					<a id="icon-mic"><span class="mui-icon mui-icon-mic"></span></a>
					<a><span class="mui-icon mui-icon-micoff"></span></a>
					<a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
					<a><span class="mui-icon mui-icon-map"></span></a>
					<a><span class="mui-icon mui-icon-compose"></span></a>
					<a><span class="mui-icon mui-icon-trash"></span></a>
					<a><span class="mui-icon mui-icon-upload"></span></a>
					<a><span class="mui-icon mui-icon-download"></span></a>
					<a id="icon-close"><span class="mui-icon mui-icon-close"></span></a>
					<a><span class="mui-icon mui-icon-closeempty"></span></a>
					<a><span class="mui-icon mui-icon-redo"></span></a>
					<a><span class="mui-icon mui-icon-undo"></span></a>
					<a id="icon-refresh"><span class="mui-icon mui-icon-refresh"></span></a>
					<a><span class="mui-icon mui-icon-refreshempty"></span></a>
					<a><span class="mui-icon mui-icon-reload"></span></a>
					<a><span class="mui-icon mui-icon-loop"></span></a>
					<!--<a><span class="mui-icon mui-icon-loopstrong"></span></a>-->
					<a>
						<span class="mui-spinner"></span>
					</a>
                    
					<a id="icon-star"><span class="mui-icon mui-icon-star"></span></a>
					<a><span class="mui-icon mui-icon-starhalf"></span></a>
					<a id="icon-plus"><span class="mui-icon mui-icon-plus"></span></a>
					<a><span class="mui-icon mui-icon-plusempty"></span></a>
					<a id="icon-minus"><span class="mui-icon mui-icon-minus"></span></a>
					<a><span class="mui-icon mui-icon-checkmarkempty"></span></a>
					<a><span class="mui-icon mui-icon-search"></span></a>
					<!--<a><span class="mui-icon mui-icon-searchstrong"></span></a>-->
					<!--<a><span class="mui-icon mui-icon-share"></span></a>-->

					<a id="icon-home"><span class="mui-icon mui-icon-home"></span></a>
					<a><span class="mui-icon mui-icon-navigate"></span></a>
					<a id="icon-gear"><span class="mui-icon mui-icon-gear"></span></a>
					<a><span class="mui-icon mui-icon-settings"></span></a>
					<!--<a><span class="mui-icon mui-icon-settingsstrong"></span></a>-->
					<a><span class="mui-icon mui-icon-list"></span></a>
					<a><span class="mui-icon mui-icon-bars"></span></a>
					<a><span class="mui-icon mui-icon-paperplane"></span></a>
					<a id="icon-info"><span class="mui-icon mui-icon-info"></span></a>
					<a id="icon-help"><span class="mui-icon mui-icon-help"></span></a>
					<a><span class="mui-icon mui-icon-locked"></span></a>
					<a id="icon-more"><span class="mui-icon mui-icon-more"></span></a>
					<a><span class="mui-icon mui-icon-flag"></span></a>
					<a><span class="mui-icon mui-icon-paperclip"></span></a>
					<a><span class="mui-icon mui-icon-eye"></span></a>

					<a><span class="mui-icon mui-icon-back"></span></a>
					<a><span class="mui-icon mui-icon-forward"></span></a>

					<a><span class="mui-icon mui-icon-arrowup"></span></a>
					<a><span class="mui-icon mui-icon-arrowdown"></span></a>
					<a><span class="mui-icon mui-icon-arrowleft"></span></a>
					<a><span class="mui-icon mui-icon-arrowright"></span></a>

					<a><span class="mui-icon mui-icon-arrowthinup"></span></a>
					<a><span class="mui-icon mui-icon-arrowthindown"></span></a>
					<a><span class="mui-icon mui-icon-arrowthinleft"></span></a>
					<a><span class="mui-icon mui-icon-arrowthinright"></span></a>

					<a><span class="mui-icon mui-icon-pulldown"></span></a>
                    <a><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
                    <a><span class="mui-icon-extra mui-icon-extra-sweep"></span></a>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
</style>
