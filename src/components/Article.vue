<template>
  <div>
    <!--loading动画部分-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <!-- 2 帖子详情 -->
    <main class="article-main">

    	<!-- 2.1 主体内容部分 -->
    	<div class="content">
    		<!-- 2.1-1 帖子标题 + 内容描述 -->
    		<div class="post-content">
    			<!-- 整个标题 -->
    			<div class="title-wrap">
    				<div class="title">Egg.js现在用的人多吗？那些公司在用有知道的吗？</div>
    				<ul class="info">
    					<li>发布于 7个月前</span>
    					<li>作者 <a href="javascript:;" class="autor">nodeper</a></li>
    					<li>7930 次浏览 </li>
    					<li>来自 问答 </li>
    				</ul>
    			</div>
					<!-- 发帖内容描述 -->
    			<div class="text">
    				<div class="inner-wrap">
    					<div class="markdown-text">
    						<p>Egg.js现在用的人多吗？那些公司在用有知道的吗？</p>
    						<p>同上，老铁们出来吧。</p>
    						
    					</div>
    				</div>	
    			</div>
    		</div>
				
				<!-- 2.1-2 评论回复部分 -->
    		<div class="review-wrap">
    			<div class="review-title">
    				82回复
    			</div>

    			<!-- 评论主体部分列表项 -->
    			<div class="review">
    				<div class="line-info">
    					<div class="user-info"></div>
    					<div class="zan"></div>
    				</div>
    				
    				<div class="reply-content"></div>
    			</div>
    		</div>

    	</div>  <!-- 对应content --> 

    	<!-- 2.2 aside部分 -->

    </main>
  </div>
</template>

<script>
export default {
  name: "Article",
  data(){
  	return {
  		isLoading: false
  	}
  }

}

</script>

<style scoped>

.article-main {
	margin: 15px auto;
	max-width: 1400px;
  min-width: 960px;
  min-height: 400px;
}

.content {
	margin-right: 305px;
}


/* 帖子标题 + 内容描述  */
.post-content {
	margin-bottom: 13px;
	background-color: #fff;
  border-radius: 3px;
	
}
.title-wrap {
  padding: 10px;
}
.title {
	display: inline-block;
	margin: 8px 0;
	width: 75%;
	
	font-size: 22px;
	line-height: 130%;
	font-weight: 700; 
	color: #333;
  vertical-align: bottom;  
}
.info {
	display: flex;
	font-size: 12px;
  color: #838383;
  overflow: hidden;
}
.info li a.autor:hover {
	text-decoration: underline;
	cursor: pointer;
}
.info li::before {
	padding: 0 3px;
  content: "•";
}
.text {
	padding: 10px;

	font-size: 14px;
	line-height: 2em;
	color: #333;
  border-top: 1px solid #e5e5e5;
}
.inner-wrap {
	margin: 0 10px;
}


/* 评论部分  */
.review {

}


</style>
