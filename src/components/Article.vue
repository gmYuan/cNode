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
    				<div class="title">{{post.title}}</div>
    				<ul class="info">
    					<li>发布于 {{post.create_at|seetime}}</li>
    					<li>
                <span>作者</span>
                <a href="javascript:;">
                  {{loginname}}
                </a>
              </li>

    					<li>{{post.visit_count}} 次浏览 </li>
    					<li>来自 {{post | articleType}} </li>
    				</ul>
    			</div>
					<!-- 发帖内容描述 -->
    			<div class="text">
    				<div class="inner-wrap markdown-body" v-html="post.content">
    				</div>	
    			</div>
    		</div>
				
				<!-- 2.1-2 评论回复部分 -->
    		<div class="review-wrap">
    			<div class="review-title">
            {{post.reply_count}} 回复
    			</div>
    			<!-- 评论主体部分列表项 -->
    			<div class="review">
    				<div class="line-info">
    					<div class="user-info">
                <a href="javascript:;" class="pic-wrap">
                  <img src="../assets/aur.jpg" alt="">
                </a>
                <a href="javascript:;" class="name">
                  <span>zdingfeng</span>
                </a>
                <a href="javascript:;" class="time">
                  2楼•7 个月前
                </a>
              </div>
    					<div class="zan">
                <i class="btn-zan"></i>
                <span class="up-count">1</span>
              </div>
    				</div>
    				<!-- 评论正文部分-->
    				<div class="reply-content">
              <div>
                <p>不了解egg  刚学会koa，哪里有egg的视频教程推荐一下  老铁们</p>
              </div>
            </div>
    			</div>
    		</div>

    	</div>  <!-- 对应content --> 

    	<!-- 2.2 aside部分 -->

    </main>

  </div>
</template>

<script>

import 'github-markdown-css';

export default {
  name: "Article",
  data(){
  	return {
  		isLoading: false,
      post: {},
      loginname: ''
  	}
  },

  methods: {
    getArticle(){
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.postid}`)
      .then(res => {
        this.isLoading = false
        this.post = res.data.data
        this.loginname = this.post.author.loginname
        console.log(this.post)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  beforeMount(){
    this.isLoading = true
    this.getArticle()
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
.review-wrap {
  margin-bottom: 13px;
}
.review-title {
  padding: 10px;
  color: #444;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}

.review{
  padding: 10px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background: #fff;
}
.line-info {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.user-info {
  display: flex;
  align-items: flex-start;
}
.user-info img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.user-info .name {
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
}
.user-info .time {
  padding-left: 5px;
  font-size: 11px;
  color: #08c;
}

.zan {
  font-size: 15px;
  display: flex;
  align-items: flex-start;
}
.btn-zan {
  display: inline-block;
  margin-right: 5px;
  width: 16px;
  height: 17px;
  opacity: .4;
  background: url("../assets/zan.svg") no-repeat ;
  background-size: cover;
  cursor: pointer;
}
.btn-zan:hover {
  color: #000;
  opacity: .6;
}
.up-count{
  color: gray;
}
.reply-content {
  margin-top: -25px;
  padding-left: 50px;
  color: #333;
}

</style>
